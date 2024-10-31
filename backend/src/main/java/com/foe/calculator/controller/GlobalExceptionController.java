package com.foe.calculator.controller;

import com.foe.calculator.datatransferobjects.StringWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionController {

    @ExceptionHandler
    public ResponseEntity<StringWrapper> handleInvalidExpression(IllegalArgumentException ex){
        StringWrapper response = new StringWrapper();
        response.setData(ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
