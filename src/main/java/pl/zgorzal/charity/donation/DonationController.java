package pl.zgorzal.charity.donation;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/donation")
public class DonationController {
    private final DonationService donationService;

    @GetMapping
    public List<Donation> getAllDonations() {
        return donationService.getAllDonations();
    }

    @PostMapping
    public void addDonation(@RequestBody DonationAddFormDTO donationAddFormDTO) {
        donationService.addDonation(donationAddFormDTO);
    }
}
