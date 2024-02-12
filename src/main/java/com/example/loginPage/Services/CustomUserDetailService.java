package com.example.loginPage.Services;

import com.example.loginPage.Entities.User;
import com.example.loginPage.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    UserRepo userRepo;
    //now this custom class implements user detailservice and fetch data from database
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

//     load user from database
        User user=userRepo.findByEmail(username).orElseThrow(()-> new RuntimeException("User not found !!"));
        return user;
    }
}
