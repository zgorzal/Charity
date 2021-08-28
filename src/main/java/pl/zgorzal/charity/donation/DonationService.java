package pl.zgorzal.charity.donation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.zgorzal.charity.category.Category;
import pl.zgorzal.charity.category.CategoryService;
import pl.zgorzal.charity.institution.InstitutionService;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DonationService {
    private final DonationRepository donationRepository;
    private final CategoryService categoryService;
    private final InstitutionService institutionService;

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    public void addDonation(DonationAddFormDTO donationAddFormDTO) {
        Donation donation = new Donation();
        donation.setQuantity(donationAddFormDTO.getQuantity());
        List<Category> categories = new ArrayList<>();
        categories.add(categoryService.getCategoryById(donationAddFormDTO.getCategoriesId()));
        donation.setCategories(categories);
        donation.setInstitution(institutionService.getInstitutionById(donationAddFormDTO.getInstitutionId()));
        donation.setStreet(donationAddFormDTO.getStreet());
        donation.setCity(donationAddFormDTO.getCity());
        donation.setZipCode(donationAddFormDTO.getZipCode());
        donation.setPickUpDate(donationAddFormDTO.getPickUpDate());
        donation.setPickUpTime(donationAddFormDTO.getPickUpTime());
        donation.setPickUpComment(donationAddFormDTO.getPickUpComment());
        donationRepository.save(donation);
    }
}
