import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import QuestionModal from "../ui/QuestionModal";

const ButtonGrid = ({ year }) => {
  const buttonCount = year === "first" ? 75 : 50;
  const buttons = Array.from({ length: buttonCount }, (_, i) => i + 1);

  // ----------------------
  // FIRST YEAR (1..50)
  // ----------------------
  const firstYearQuestions = {
    1: "Take a number as input and print whether it is divisible by 2, 3, or both.",
    2: "Take two numbers as input and print their sum.",
    3: "Take two numbers and print which one is greater.",
    4: "Take a number and print whether it's even or odd.",
    5: "Take a number and print whether it's positive, negative, or zero.",
    6: "Input two numbers and print their average.",
    7: "Take the user's name and print a greeting message.",
    8: "Input three numbers and print the largest.",
    9: "Take a number and print its square.",
    10: "Take a number and print its cube.",
    11: "Input the age of a person and print if they are eligible to vote (18+).",
    12: "Print the numbers from 1 to 10 using a loop.",
    13: "Print all even numbers between 1 and 20.",
    14: "Print all odd numbers between 1 and 20.",
    15: "Print the sum of numbers from 1 to 100.",
    16: "Take a number and print its multiplication table (up to 10).",
    17: "Input a number and print its factorial (use loop).",
    18: "Print numbers from 10 down to 1.",
    19: "Input a character and check if it's a vowel or consonant.",
    20: "Input two numbers and swap their values.",
    21: "Input marks of a student and print grade.",
    22: "Take a number and print whether it's a multiple of 3 and 5.",
    23: "Print the sum of even numbers between 1 and N.",
    24: "Print the sum of odd numbers between 1 and N.",
    25: "Take a number and print the reverse of its digits.",
    26: "Take a number and print the sum of its digits.",
    27: "Print all numbers between 1 and N divisible by both 2 and 7.",
    28: "Input a number and print whether it's a palindrome.",
    29: "Print all squares of numbers from 1 to N.",
    30: "Print all numbers between 1 and N divisible by 5 but not 10.",
    31: "Find and print the smallest number among three inputs.",
    32: "Take a number and print whether it's a prime number.",
    33: "Print all prime numbers between 1 and N.",
    34: "Print the Fibonacci sequence up to N terms.",
    35: "Find the greatest of four numbers.",
    36: "Print the sum of digits of all numbers from 1 to N.",
    37: "Count how many digits a given number has.",
    38: "Take temperature in Celsius and convert to Fahrenheit.",
    39: "Print the factorial of all numbers from 1 to N.",
    40: "Count how many even and odd numbers are between 1 and N.",
    41: "Print the sum of all prime numbers between 1 and N.",
    42: "Find and print the second largest number among three given numbers.",
    43: "Check if a number is an Armstrong number.",
    44: "Find the LCM (Least Common Multiple) of two numbers.",
    45: "Find the HCF (Highest Common Factor) of two numbers.",
    46: "Print all numbers between 1 and N whose sum of digits is even.",
    47: "Print all numbers between 1 and N that are both odd and divisible by 3.",
    48: "Take a number and print the count of even digits in it.",
    49: "Print all perfect squares between 1 and N that are also even.",
    50: "Take a number N and print the sum of all numbers between 1 and N divisible by 3 or 5 but not both.",
    51: "Take a number and print whether it's divisible by 4 and 6 both, or neither.",
    52: "Take three numbers as input and print their average.",
    53: "Take a number and print the sum of its first and last digits.",
    54: "Input a number and count how many odd digits it has.",
    55: "Input a number and print the product of its digits.",
    56: "Take a number and print the difference between the sum of even and odd digits.",
    57: "Print all numbers between 1 and N that are divisible by 4 but not by 8.",
    58: "Take N as input and print all multiples of 9 up to N.",
    59: "Print the cube of all even numbers between 1 and N.",
    60: "Take a number and print all its factors.",
    61: "Print all numbers between 1 and N that are divisible by both 4 and 9.",
    62: "Take a number and print the product of all even numbers up to that number.",
    63: "Input N and print the Nth Fibonacci number.",
    64: "Take a number and print the product of its non-zero digits.",
    65: "Take a number and print whether the sum of its digits is a prime number.",
    66: "Input a number and print the reverse of its digits without converting it to a string.",
    67: "Take a number and print the sum of cubes of its digits.",
    68: "Take the user's birth year and print their current age.",
    69: "Input the length and breadth of a rectangle and print its area and perimeter.",
    70: "Input radius and print the area and circumference of a circle.",
    71: "Input three sides of a triangle and check whether it is scalene, isosceles, or equilateral.",
    72: "Input three angles and check whether they form a valid triangle.",
    73: "Input the base and height of a triangle and print its area.",
    74: "Print all numbers between 1 and N that are divisible by 11 but not by 22.",
    75: "Input two numbers and print all numbers between them that are divisible by 7.",
  };

  // ----------------------
  // SECOND YEAR (1..50)
  // ----------------------
  const secondYearQuestions = {
    1: "Write a program to input two numbers and display their sum, difference, product, and quotient.",
    2: "Write a program to check whether a number is even or odd.",
    3: "Write a program to find the largest among three numbers.",
    4: "Write a program to input marks of a student and display grade according to marks.",
    5: "Write a program to print the multiplication table of a number.",
    6: "Write a program to count the number of digits in a given number.",
    7: "Write a program to find the factorial of a number using a loop.",
    8: "Write a program to reverse a number (e.g., 123 → 321).",
    9: "Write a program to check whether a number is a palindrome.",
    10: "Write a program to print all prime numbers between 1 and 100.",
    11: "Write a program to calculate the sum of even and odd numbers separately between 1 and N.",
    12: "Write a program to find the sum of digits of a number.",
    13: "Write a program to display the Fibonacci series up to N terms.",
    14: "Write a program to find the smallest element in an array.",
    15: "Write a program to find the average of elements in an array.",
    16: "Write a program to count the number of positive and negative numbers in an array.",
    17: "Write a program to input a string and count how many vowels and consonants it contains.",
    18: "Write a program to reverse a string without using string library functions.",
    19: "Write a program to check whether a given string is a palindrome.",
    20: "Write a program to print all elements of an array in reverse order.",
    21: "Write a program to find the second largest element in an array.",
    22: "Write a program to find the sum of all even numbers stored in an array.",
    23: "Write a program to count how many times a number appears in an array.",
    24: "Write a program to merge two sorted arrays into a third sorted array.",
    25: "Write a program to sort an array in ascending order using bubble sort.",
    26: "Write a program to implement binary search in an array.",
    27: "Write a program to find both the smallest and largest element in an array using a single loop.",
    28: "Write a program to find the number of words in a given string.",
    29: "Write a program to copy one string into another without using strcpy().",
    30: "Write a program to count the frequency of each character in a string.",
    31: "Write a program that swaps two numbers using pointers.",
    32: "Write a program to find the length of a string using pointers.",
    33: "Write a program that prints the memory addresses of all elements of an array using pointers.",
    34: "Write a program to find the sum of all elements of an array using pointers.",
    35: "Write a program that reads 5 students names and marks, and prints the student with the highest marks.",
    36: "Write a program using a structure to store employee details (name, id, salary) and display them.",
    37: "Write a program using structures to add two complex numbers.",
    38: "Write a program using structures to find the distance between two points.",
    39: "Write a program to store and display information of 5 books (title, author, price) using an array of structures.",
    40: "Write a program to input and display the details of students (roll number, name, marks) using structures.",
    41: "Write a program to input a matrix of size m x n and print its transpose.",
    42: "Write a program to input an N x N matrix and print the sum of its main and secondary diagonals.",
    43: "Write a program to count how many uppercase letters, lowercase letters, digits, and special symbols exist in a given string.",
    44: "Write a program to remove duplicate elements from an integer array and print the unique values.",
    45: "Write a program to find all pairs of numbers in an array whose sum equals a given number.",
    46: "Define a structure Student with name and marks. Input details of N students and print them sorted by marks (ascending).",
    47: "Define a structure Date with day, month, year. Input two dates and print which one is earlier.",
    48: "Write a program to find and print the sum of each row in a matrix.",
    49: "Input a sentence and print the number of vowels in each word.",
    50: "Use a structure to store a student's name and marks in 3 subjects.",
  };

  // choose questions based on current year
  const questions = year === "first" ? firstYearQuestions : secondYearQuestions;

  const [selected, setSelected] = useState(null);

  // Close modal when year changes so stale content doesn't persist
  useEffect(() => {
    setSelected(null);
  }, [year]);

  const handleClick = (number) => setSelected(number);

  // gradient classes depending on year
  const gradientClasses =
    year === "first"
      ? "bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 border-yellow-300 hover:border-yellow-200"
      : "bg-gradient-to-br from-cyan-400 to-teal-500 hover:from-cyan-300 hover:to-teal-400 border-cyan-300 hover:border-cyan-200";

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={year} // triggers animation when year changes
          className="w-full relative z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* small label so user sees which set is active */}
          <div className="flex justify-center mb-6">
            <div className="text-sm md:text-base px-3 py-1 rounded-full bg-white/6 text-gray-200">
              Viewing:{" "}
              {year === "first"
                ? "First Year Challenges"
                : "Second Year Challenges"}
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5 justify-center">
            {buttons.map((number, index) => (
              <motion.div
                key={number}
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 + index * 0.01,
                }}
              >
                <Button
                  onClick={() => handleClick(number)}
                  className={`${gradientClasses} text-black rounded-2xl w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 border-2 shadow-lg flex-shrink-0`}
                >
                  <span className="font-semibold">{number}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <QuestionModal
        isOpen={!!selected}
        number={selected}
        question={
          questions[selected]
            ? questions[selected]
            : `No question assigned for ${
                year === "first" ? "First" : "Second"
              } Year (button ${selected}).`
        }
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default ButtonGrid;
