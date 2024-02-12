package com.example.loginPage.Controller;

import com.example.loginPage.Entities.User;
import com.example.loginPage.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping("/get")
    public String getUser(){
        return "Hii Avinash and Moumita";
    }

}
