function yourFutureCareer(career) {
 let career = futurejob;
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  } else{
    return career;
  }
}



/////// test part 
// Test case 1: FrontEnd Developer (career <= 0.32)
Test.assertEquals(yourFutureCareer(0.25), "FrontEnd Developer", "Test Case 1 Failed");

// Test case 2: BackEnd Developer (career >= 0.65)
Test.assertEquals(yourFutureCareer(0.65), "BackEnd Developer", "Test Case 2 Failed");

// Test case 3: Full-Stack Developer (0.32 < career < 0.65)
Test.assertEquals(yourFutureCareer(1), "Full-Stack Developer", "Test Case 3 Failed");

// Test case 4: Ensure career value is returned (Optional)
Test.assertEquals(yourFutureCareer(0.9), 0.9, "Test Case 4 Failed");

