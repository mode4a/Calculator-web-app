package com.foe.calculator.service;

import com.foe.calculator.datatransferobjects.StringWrapper;
import org.springframework.stereotype.Service;

import java.io.InvalidObjectException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.MissingResourceException;

@Service
public class CalculatorService {

    List<Character> operators ;

    public CalculatorService() {
        this.operators = new ArrayList<>(
                Arrays.asList('+', '-', '*', '/', '%', '^'));
    }

    public StringWrapper parseAndEvaluate(StringWrapper expressionObj){
        String expression ;
        try{
            expression = expressionObj.getData() ;
        } catch (Exception e){
            throw new IllegalArgumentException("Can't get expression");
        }
        if (!expression.isEmpty()) {
            expressionObj.setData(Double.toString(evaluate(expression))) ;
        } return expressionObj ;
    }


    public double evaluate(String expression) {
        for (char operator : operators) {
            int index = expression.indexOf(operator);
            if (index != -1) {
                double num1 ;
                double num2 ;
                try {
                    num1 = Double.parseDouble(expression.substring(0, index).trim());
                    num2 = Double.parseDouble(expression.substring(index + 1).trim());
                } catch (NumberFormatException ex){
                    throw new IllegalArgumentException("invalid expression format");
                }
                return calculate(num1, operator, num2);
            }
        }
        if(expression.startsWith("sqrt(")){
            double number ;
            try{
                number = Double.parseDouble(expression.substring(5).trim()) ;
            } catch (NumberFormatException ex){
                throw new IllegalArgumentException("invalid expression format");
            }
            return Math.sqrt(number);
        }
        try {
            return Double.parseDouble(expression.trim()) ;
        }
        catch (NumberFormatException ex){
            throw new IllegalArgumentException("invalid expression format");
        }
    }

    private double calculate(double num1, char operator, double num2) {
        return switch (operator) {
            case '+' -> num1 + num2;
            case '-' -> num1 - num2;
            case '*' -> num1 * num2;
            case '/' -> num1 / num2;
            case '%' -> num1 % num2;
            case '^' -> Math.pow(num1, num2);
            default -> throw new IllegalArgumentException("Unknown operator");
        };
    }

}
