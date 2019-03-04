package com.vincle.vfs.customer.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.vincle.vfs.customer.model.Customer;
import com.vincle.vfs.customer.model.CustomerRepository;

@RestController
@RequestMapping(produces = "application/json")
public class CustomerController {
	
	@Autowired
	protected CustomerRepository customerRepository;

	@GetMapping("/customers")
	public Page<Customer> getAll(Pageable pageable) {
		return customerRepository.findAll(pageable);
	}
	
	@GetMapping("/customers/{id}")
	public Customer get(@PathVariable long id) {
		Optional<Customer> customer = customerRepository.findById(id);
		if(!customer.isPresent())
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer " + id + " not found");
		return customer.get();
	}
	
	@PostMapping("/customers")
	public Customer create(@Valid @RequestBody Customer customer) {
		return customerRepository.save(customer);
	}
	
	@PutMapping("/customers/{id}")
	public Customer update(@Valid @RequestBody Customer customer, @PathVariable long id) {
		Optional<Customer> stored = customerRepository.findById(id);
		if(!stored.isPresent())
			throw new ResourceNotFoundException("Customer " + id + " not found");
		customer.setId(id);
		return customerRepository.save(customer);
	}
	
	@DeleteMapping("/customers/{id}")
	public void delete(@PathVariable long id) {
		customerRepository.deleteById(id);
	}
	
}
