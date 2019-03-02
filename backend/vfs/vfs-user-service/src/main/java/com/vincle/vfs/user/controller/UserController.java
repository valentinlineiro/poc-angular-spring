package com.vincle.vfs.user.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@RequestMapping("/me")
	public String getMe() {
		return "Hello, it's me";
	}
	
}
