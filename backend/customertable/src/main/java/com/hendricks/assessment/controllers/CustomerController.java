package com.hendricks.assessment.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hendricks.assessment.repos.CustomerEntity;
import com.hendricks.assessment.repos.CustomerRepository;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@GetMapping("/customers")
	public @ResponseBody Iterable<CustomerEntity> getCustomers() {
		return customerRepository.findAll();
	}
	
	@GetMapping("/create")
	public @ResponseBody CustomerEntity createCustomer(@RequestParam String firstName, @RequestParam String lastName, 
			@RequestParam  String address) {
		CustomerEntity c = new CustomerEntity();
		c.setFirstName(firstName);
		c.setLastName(lastName);
		c.setAddress(address);
		customerRepository.save(c);
		return c;
		
	}
	
	@GetMapping("/delete")
	public @ResponseBody String deleteCustomer(@RequestParam int id) {
		Optional<CustomerEntity> c = customerRepository.findById(id);
		customerRepository.deleteById(c.get().getId());
		return "Customer Deleted";
	}
	
	
}
