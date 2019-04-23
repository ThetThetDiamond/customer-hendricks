package com.hendricks.assessment.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hendricks.assessment.repos.CustomerEntity;

@RestController
public class CustomerController {
	
	@GetMapping("/greeting")
	public ArrayList<CustomerEntity> getCustomers() {
		return null;
	}
	@GetMapping("/create")
	public boolean createCustomer() {
		boolean result = false;
//		if(customercreate) {
//			
//		}
		return result;
	}
	
	@GetMapping("/delete")
	public boolean deleteCustomer() {
		boolean result = false;
//		if(customer) {
//			
//		}
		return result;
	}
	
	
}
