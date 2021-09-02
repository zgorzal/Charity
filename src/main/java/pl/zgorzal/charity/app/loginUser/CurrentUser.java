package pl.zgorzal.charity.app.loginUser;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

public class CurrentUser extends User {
    private final pl.zgorzal.charity.user.User user;

    public CurrentUser(String email, String password, Collection<? extends GrantedAuthority> authorities, pl.zgorzal.charity.user.User user) {
        super(email, password, authorities);
        this.user = user;
    }

    public pl.zgorzal.charity.user.User getUser() {
        return user;
    }
}
