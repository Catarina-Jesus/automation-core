# automation-core
My repository for Automation Core homework

##Questions of lesson 4 homework

###How would I tackle selector issue on page 2 with the quantitycell variable
The quantity cell variable is refering tonthe quantity of a product selected. The biggest problem with it is that it is not scalable. This variable is holding a value that is not static, meaning it could change, specially during testing when probably a lot of different values would have been held by quantitycell. This could cause issues as every time the value would change, the value would need to be updated manually. In the future this variable would have to be scaled, probably utilising a function comprising a conditional function, all depending on the test cases developed.