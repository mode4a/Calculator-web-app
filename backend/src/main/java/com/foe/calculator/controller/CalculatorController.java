package com.foe.calculator.controller;


import com.foe.calculator.datatransferobjects.StringWrapper;
import com.foe.calculator.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

@RestController
@RequestMapping("api")
@CrossOrigin
public class CalculatorController {

    CalculatorService calculatorService;

    @Autowired
    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @PostMapping("eval")
    public ResponseEntity<StringWrapper> evaluate(@RequestBody StringWrapper requestObject) {
        StringWrapper response = calculatorService.parseAndEvaluate(requestObject) ;
        return new ResponseEntity<>(response, HttpStatus.OK) ;
    }
}
