package pl.zgorzal.charity.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }
}
