     const topics = [
            {
                name: "BASIC INPUT OUTPUT",
                questions: [
                    {
                        q: "Write a program to print the message: Today I made my first C Program.",
                        a: `#include<stdio.h>
void main(){
    printf("Today I made my first C Program");
}`
                    },
                    {
                        q: "Write a program to read a character from the keyboard and display it on the screen.",
                        a: `#include<stdio.h>
#include<conio.h>
void main()
{ char a;
scanf("%c",&a);
printf("%c",a);}`
                    },
                    {
                        q: "Write a program to read only 4 characters from the keyboard and display it on the screen in a separate line.",
                        a: `#include<stdio.h>
#include<conio.h>
void main()
{ char a;
printf("enter any four character");
for(int a=0;a<5;a++)
{  scanf("%c"&a);
printf("\n %c",a);
}` },
                    
                    {
                        q: "Write a program to print your name at center of the first line?",
                        a: `#include<stdio.h>
void main(){
printf("\t\t\t\t YOGESH PARMAR");
}`
                    },
                    { q:"Write a program to store single quote and print that variable to show single quote on output screen.",
                     a:`  #include <stdio.h>
#include <string.h>
int main()
{
    char cout;
    char x='/'';
    printf("%c", x);
    return 0;
}` },
                    { q:"Write a program for printing your name on output screen but your name should blink 5 times",
                    a:`#include<stdio.h>
                    #include<conio.h>
                    #include<dos.h>
                    void main()
                    {
                    int a=1;
                    clrscr
                    for(a=1;a<=5;a++)
                    {printf("yogesh");
                    delay(200);
                    clrscr();
                    delay(100);
                    }
                    }`},
                   { q: "Write a program to print your name at center of the first line ?",
                      a:`"#include<stdio.h>
                        void main()
                         { printf("/t/t/t/t yogesh parmar");}`}, 
                    { q:"Write the program to display this output ? #include<stdio.h> #include<conio.h> #include<dos.h> void main () { clrscr(); printf(\"hello,welcome to c\"); delay(5000); }",
                      a:`" #include <stdio.h>
#include <conio.h>
#include <dos.h>

void main() {
    clrscr();
    printf("Hello, welcome to C");
    delay(5000);
    getch();
}
` },
                      {                  
                       q: "Write a program to print your name at the center of the page ?",
                       a:`" #include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    int i, spaces;

    printf("Enter your name: ");
    gets(name);

    for(i=0; i<10; i++)
        printf("\n");

    spaces = (80 - strlen(name)) / 2;
    for(i=0; i<spaces; i++)
        printf(" ");

    printf("%s", name);

    return 0;
}
"`},
             {      q:"Write a program to store single quote and print that variable to show single quote on output screen ?",
                 a:`#include <stdio.h>
#include <string.h>
int main()
{
    char cout;
    char x='/'';
    printf("%c", x);
    return 0;
}`},
                    { q:"Write a program for printing your name on output screen but your name should blink 5 time ?",
                        a:`"#include<stdio.h>
                    #include<conio.h>
                    #include<dos.h>
                    void main()
                    {
                    int a=1;
                    clrscr();
                    for(a=1;a<=5;a++)
                    {printf("yogesh");
                    delay(200);
                    clrscr();
                    delay(100);
                    }
                    }"`},
                    { q:"Enter password display like ****** ?",
                        a:`#include<stdio.h>
                        #include<conio.h>
                        #include<dos.h>
                        void main()
                        { char pass;
                         clrscr();
                         printf("enter your password");
                         for(int a=0;a<=5;a++)
                         {scanf("%c",&pass);
                         printf("*");
                         }
                    }`},
                    { q:"Enter two character from user and print ASCII value ?",
                    a:`#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main()
{ char a,b;
    scanf("%c,%c",&a,&b);
    printf("%d \n %d",a,b);


 }`},
                 {   q:"Print all ASCII character 0 to 127 ?",
                    a:`#include<stdio.h>
                    #include<stdlib.h>
#include<string.h>
int main()
{ 
    for(int a=0; a<=127;a++)    
    {
    printf("%c ",a);}


 }`},
                ]
            },
            {
                name: "DECISION CONTROL STRUCTURE",
                questions: [
                    {q:"Write a program to enter the number from the user and check it is positive or negative or 0 (zero) ?",
                      a:`#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main()
{ int x;
    scanf("%d",&x);
    if(x==0)
    {printf("the number is 0");}
    else if(x<0)
    {printf("the number is negative");}
 else if(x>=0)
{printf("the number is positive");
} else printf("please enter valid number");
 }`},          
                     {   q:"Enter a number from user and check it is odd or even ?",
                        a:`#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main()
{ int a;
scanf("%d",&a);

if(a%2==0)
{ printf("the num is even");}
else printf("the num is odd");

 }` },
               {   q:     "Enter a number from the user and check that it is of 1 digit or 2 digit or 3 digit or 4 digit or 5 digit ?",
                  a:`#include <stdio.h>
#include <stdlib.h>

void main() {
    long long n,x;
    scanf("%lld",&n);
    x=n;
   
    if (x >= 0 && x <= 9) printf("1 digit\n");
    else if (x >= 10 && x <= 99) printf("2 digit\n");
    else if (x >= 100 && x <= 999) printf("3 digit\n");
    else if (x >= 1000 && x <= 9999) printf("4 digit\n");
    else if (x >= 10000 && x <= 99999) printf("5 digit\n");
    else printf("more than 5 digits or invalid\n");
    
}
`}, { q: "Enter a number from the user if the number is between 0 to 40 then we will print fail if the number is between 40 to 60 then we will print C grade ,if the number is between 60 to 80 than we will print B grade ,if the number is between 80 to 100 then we will print A grade and rest all number are invalid ?",
     a:`#include <stdio.h>

void main() {
    int marks;
    scanf("%d", &marks);
    if (marks >= 0 && marks < 40) printf("fail\n");
    else if (marks >= 40 && marks < 60) printf("C grade\n");
    else if (marks >= 60 && marks < 80) printf("B grade\n");
    else if (marks >= 80 && marks <= 100) printf("A grade\n");
    else printf("invalid\n");
    
}`},      
{ q:"Enter a number from the user and check it is a decimal number or not ?",
    a:`#include <stdio.h>
int main() {
    float n;
    scanf("%f", &n);
    if (n == (int)n)
        printf("integer\n");
    else
        printf("decimal\n");
    
}
`},                
    {q:"Enter a number from the user if it is a negative then convert into positive and if it is positive then convert into negative often that print the number ?",
      a:`#include <stdio.h>
void main() {
    int n;
    scanf("%d", &n);
    if (n < 0)
        printf("%d\n", -n);
    else
        printf("%d\n", -n);
}`},      { q:        "Enter a character from the user and check that it is an alphabet ?",
             a:`
#include <stdio.h>
void main() {
    char ch;
    scanf(" %c", &ch);
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
        printf("alphabet\n");
    else
        printf("not alphabet\n");
    
}
`}, {q:      "Enter a number from the user if the number is negative then square the number and if it is positive then increment the number 20 times ?",
       a:`
#include <stdio.h>
int main() {
    int n, i;
    scanf("%d", &n);
    if (n < 0)
        printf("%d\n", n * n);
    else {
        for (i = 0; i < 20; i++)
            n++;
        printf("%d\n", n);
    }
    return 0;
}
`},
                {q:    "Enter the number from the user it the number is negative or positive and find out of that number ?",
                  a:`
#include <stdio.h>
void main() {
    int n;
    scanf("%d", &n);
    if (n > 0)
        printf("positive\n");
    else if (n < 0)
        printf("negative\n");
    else
        printf("zero\n");


}
`},
                   {q: "Enter two number from user and check which is the greater number and print the greater number ?",
                    a:`#include <stdio.h>
int main() {
    int a, b;
    scanf("%d%d", &a, &b);
    if (a > b)
        printf("%d\n", a);
    else if (b > a)
        printf("%d\n", b);
    else
        printf("equal\n");
    return 0;
}
`},{q:"Enter a number from user and check it is divisible by 4 or not ?",
     a:`#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    if (n % 4 == 0)
        printf("divisible by 4\n");
    else
        printf("not divisible by 4\n");
    return 0;
}
`},               {q:"Enter a four characters from users and check they are equal or not ?",
                    a:`#include <stdio.h>
int main() {
    char a, b, c, d;
    scanf(" %c %c %c %c", &a, &b, &c, &d);
    if (a == b && b == c && c == d)
        printf("all equal\n");
    else
        printf("not equal\n");
    return 0;
}
`},{q:"Enter three numbers from users and tell which is greater ?",
     a:`#include <stdio.h>
int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    if (a >= b && a >= c)
        printf("%d\n", a);
    else if (b >= a && b >= c)
        printf("%d\n", b);
    else
        printf("%d\n", c);
    return 0;
}
`},       {q:        "Enter a number from the user if the user enters 30 then print the month in which we have 30 days. If the enter 31 then print the month 31 days for 28, 29 print the month else everything is invalid ?",
           a:`#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    if (n == 30)
        printf("April, June, September, November\n");
    else if (n == 31)
        printf("January, March, May, July, August, October, December\n");
    else if (n == 28)
        printf("February (non-leap year)\n");
    else if (n == 29)
        printf("February (leap year)\n");
    else
        printf("invalid\n");
    return 0;
}
`},        {q: "Enter one digit number from user and print in words ?",
             a:`
#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);
    switch (n) {
        case 0: printf("zero\n"); break;
        case 1: printf("one\n"); break;
        case 2: printf("two\n"); break;
        case 3: printf("three\n"); break;
        case 4: printf("four\n"); break;
        case 5: printf("five\n"); break;
        case 6: printf("six\n"); break;
        case 7: printf("seven\n"); break;
        case 8: printf("eight\n"); break;
        case 9: printf("nine\n"); break;
        default: printf("invalid\n");
    }
    return 0;
}
`},      {q: "Enter two characters from user and check both are same or not, if not same then find out difference between them ?",
           a:`#include <stdio.h>
int main() {
    char a, b;
    scanf(" %c %c", &a, &b);
    if (a == b)
        printf("same\n");
    else
        printf("difference = %d\n", a - b);
    return 0;
}
`},         {q: "Enter three numbers from user and which is greater ?",
              a: `
#include <stdio.h>
int main() {
    int a, b, c;
    scanf("%d%d%d", &a, &b, &c);
    if (a >= b && a >= c)
        printf("%d\n", a);
    else if (b >= a && b >= c)
        printf("%d\n", b);
    else
        printf("%d\n", c);
    return 0;
}
`},     {q:"Enter two digit number from user and print it in word (like 50 will be five zero) ?",
           a: `#include <stdio.h>
int main() {
    int n, tens, ones;
    scanf("%d", &n);
    if (n < 10 || n > 99) {
        printf("invalid\n");
        return 0;
    }
    tens = n / 10;
    ones = n % 10;
    char *word[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    printf("%s %s\n", word[tens], word[ones]);
    return 0;
}
`},        {q: "Enter a character from user and it is in upper case, lower case, special characters or numbers ?",
               a:`#include <stdio.h>
int main() {
    char ch;
    scanf(" %c", &ch);
    if (ch >= 'A' && ch <= 'Z')
        printf("uppercase\n");
    else if (ch >= 'a' && ch <= 'z')
        printf("lowercase\n");
    else if (ch >= '0' && ch <= '9')
        printf("digit\n");
    else
        printf("special character\n");
    return 0;
}
`},  {q:   "Enter the year from user and check its leap year or not ?",
        a:`#include <stdio.h>
int main() {
    int year;
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        printf("leap year\n");
    else
        printf("not leap year\n");
    return 0;
}
` },       {q:    "Enter date, month, year and check it is valid date or not ?",
             a: `
#include <stdio.h>
int main() {
    int d, m, y;
    scanf("%d%d%d", &d, &m, &y);

    if (m < 1 || m > 12 || d < 1 || y < 1) {
        printf("invalid\n");
    }
    else if (m == 2) {
        if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
            if (d <= 29) printf("valid\n");
            else printf("invalid\n");
        } else {
            if (d <= 28) printf("valid\n");
            else printf("invalid\n");
        }
    }
    else if (m == 4 || m == 6 || m == 9 || m == 11) {
        if (d <= 30) printf("valid\n");
        else printf("invalid\n");
    }
    else {
        if (d <= 31) printf("valid\n");
        else printf("invalid\n");
    }

    return 0;
}

`},
                 {   q:"Enter current date of DOB of user and find out difference ?",
 a:`not defined sorry`},            { q:      "Write a program to calculate area and perimeter of rectangle ?",
               a:`
#include <stdio.h>
int main() {
    int l, b;
    scanf("%d%d", &l, &b);
    printf("area = %d\n", l * b);
    printf("perimeter = %d\n", 2 * (l + b));
    return 0;
}
`},  ]
            },
            {
                name: "FUNCTIONS",
                questions: [
                    {q:"Write a program to enter 2 number from the users add them and display the answer, again enter 2 number from the user subtract them and display the answer, again enter 2 number from the user add them and display the answer, again enter 2 number from the user multiply them and display the answer, again enter 2 number from the user subtract them and display the answer, again enter 2 number from the user multiply them and display the answer, again enter 2 number from the user divide them and display the answer, again enter 2 number from the user divide them and display the answer, again enter 2 number from the user add them and display the answer ?",
                   a:`#include <stdio.h>

int add(int a, int b)
{ return a + b; }
int sub(int a, int b)
{ return a - b; }
int mul(int a, int b)
{ return a * b; }
int divide(int a, int b)
{ return a / b; }

int main() {
    int a, b;
    scanf("%d%d", &a, &b);
     printf("%d\n", add(a, b));
    scanf("%d%d", &a, &b);
     printf("%d\n", sub(a, b));
    scanf("%d%d", &a, &b);
     printf("%d\n", add(a, b));
    scanf("%d%d", &a, &b); 
    printf("%d\n", mul(a, b));
    scanf("%d%d", &a, &b);
     printf("%d\n", sub(a, b));
    scanf("%d%d", &a, &b);
     printf("%d\n", mul(a, b));
    scanf("%d%d", &a, &b);
     printf("%d\n", divide(a, b));
    scanf("%d%d", &a, &b);
     printf("%d\n", divide(a, b));
    scanf("%d%d", &a, &b); 
    printf("%d\n", add(a, b));
    return 0;
}
`},
                   {q: "Write a program to enter 10 number from the user add the number and display the answer ?",
                   a:`#include <stdio.h>

int sum(int a[], int n) {
    int i, total = 0;
    for(i = 0; i < n; i++)
        total = total + a[i];
    return total;
}

int main() {
    int arr[10], i;
    for(i = 0; i < 10; i++)
        scanf("%d", &arr[i]);
    printf("%d\n", sum(arr, 10));
    return 0;
}
`}, "Write a program to return an array from function ?",
                    {q:"Making following program using local and global variable ? Factorial , Reverse , Palindrome , Prime numbers, Armstrong , Fibonacci",
                    a:`#include <stdio.h>
int n;

int local(int num) {
    int i, f = 1;
    for(i = 1; i <= num; i++)
        f = f * i;
    return f;
}

int global() {
    int i, f = 1;
    for(i = 1; i <= n; i++)
        f = f * i;
    return f;
}

int main() {
    scanf("%d", &n);
    printf("%d\n", local(n));
    printf("%d\n", global());
    return 0;
}
`},
                    {q:"Swap numbers using Call by address ?",
                   a:`#include <stdio.h>

void swap(int *x, int *y) {
    int t = *x;
    *x = *y;
    *y = t;
}

int main() {
    int a, b;
    scanf("%d%d", &a, &b);
    swap(&a, &b);
    printf("%d %d\n", a, b);
    return 0;
}
`}, "Swap numbers using Call by function ?",
                   {q: "Make function for find out power of number, enter the number and power from user ?",
                    a:`#include <stdio.h>

int power(int base, int exp) {
    int i, result = 1;
    for(i = 0; i < exp; i++)
        result = result * base;
    return result;
}

int main() {
    int base, exp;
    scanf("%d%d", &base, &exp);
    printf("%d\n", power(base, exp));
    return 0;
}

`},
                    {q:"Make function for find out Cube a user entered number ?",
                     a:`#include <stdio.h>

int cube(int n) {
    return n * n * n;
}

int main() {
    int x;
    scanf("%d", &x);
    printf("%d\n", cube(x));
    return 0;
}
`}, 
                    ]
            },
            {
                name: "ITERATIVE CONTROL STRUCTURE (LOOPS)",
                questions: [
                  {q:  "Enter a number from the user and find out the binary of that number ?",
                  a:`#include<stdio.h>
#include<conio.h>
void main()
{ int num;
int j;
int binary[32];
int i=0;
printf("enter a number");
scanf("%d",&num);
if(num==0)
{ printf("binary :0");
}
while (num>0)
{ binary[i]=num%2;
num=num/2;
i++;
}
printf("binary");
for(j=i-1;j>=0;j--)
{ printf("%d",binary[j]);
}
}`},
                    {q:"Enter a number from the user and check that the number is divisible by any prime number or not ?",
                   a:``},
                   {q: "Enter a number from the user and check it is a prime number or not ?",
                   a:`#include <stdio.h>
void main(){
    int n,i,prime=1;
    scanf("%d",&n);

    if(n<=1) prime=0;
    for(i=2;i*i<=n && prime;i++)

    if(n%i==0) prime=0;
    if(prime) printf("prime\n"); 

    else printf("not prime\n");
    
}`},
                    {q:"Enter a number from the user and print all digit of the number in separate line ?",
                   a:`#include <stdio.h>
void main(){
    int a;
    char b;
    printf("enter number");
    for(a=0;a<=5;a++)
    {scanf("%c",&b);
    printf("\n%c",b);}
}
`},
                    {q:"Write a program to print your name 1 lakh times ?",
                   a:`#include <stdio.h>
void main(){
    int i;
    for(i=0;i<100000;i++) printf("Yogesh\n");
    
}
`},
                    {q:"Write a program to print a series 1 to 1 lakh ?",
                   a:`#include <stdio.h>
void main(){
    int i;
    for(i=1;i<=100000;i++) printf("%d\n", i);
    
}
`},
                   {q: "Enter a number from the user and print the series from 1 to that number ?",
                   a:`#include <stdio.h>
void main(){
    int n,i;
    scanf("%d",&n);
    for(i=1;i<=n;i++) 
    printf("%d\n", i);
    
}
`},
                   {q: "Enter a number from the user and print that number 100 time ?",
                   a:`#include <stdio.h>
void main(){
    int n,i;
    scanf("%d",&n);
    for(i=0;i<100;i++)
     printf("%d\n", n);
    
}
`},
                    {q:"Write a program print all the odd number between 1 to 100 ?",
                   a:`#include <stdio.h>
void main(){
    int i;
    for(i=1;i<=100;i+=2)
     printf("%d\n", i);
    }
`},
                    {q:"Write a program print the table of 4 in the format given as below (till 20)? 4*1=4 and so on",
                   a:`#include <stdio.h>
void main(){
    int i;
    for(i=1;i<=20;i++)
     printf("4*%d=%d\n", i, 4*i);
    }
`},
                    {q:"Enter the number from user and reverse the number?",
                   a:`#include <stdio.h>
void main(){
    int n,rev=0,sign=1;
    scanf("%d",&n);
    if(n<0){ sign=-1; n = -n; }
    while(n>0){ rev = rev*10 + n%10; n /= 10; }
    printf("%d\n", rev*sign);
    
}
`},
                    {q:"Enter a number from the user if the user enter 1 then you will perform addition operation by entering 2 number from user add it and display answer. if user enter 2 then subtract or if user enter 3 then multiply or if user enter 4 then divide or if user enter 5 then modulo or if any other number then print invalid .if user want to quit the program then user will enter Q. ?",
                   a:`#include <stdio.h>
void main(){
    char ch;
    while(1){
        scanf(" %c",&ch);
        if(ch=='Q') break;
        if(ch>='1' && ch<='5'){
            int a,b; scanf("%d%d",&a,&b);
            if(ch=='1') printf("%d\n", a+b);
            else if(ch=='2') printf("%d\n", a-b);
            else if(ch=='3') printf("%d\n", a*b);
            else if(ch=='4') { if(b==0) printf("0\n");
             else printf("%d\n", a/b); }
            else if(ch=='5') { if(b==0) printf("0\n");
             else printf("%d\n", a%b); }
        } else printf("invalid\n");
    }
    
}
`},
                    {q:"Enter the number from user and check its palindrome or not?",
                   a:`#include <stdio.h>
void main(){
    int n,t,rev=0;
    scanf("%d",&n);
    t = n; if(t<0) t = -t;
    while(t>0){ rev = rev*10 + t%10; t /= 10; }
    if(n>=0 && rev==n) printf("palindrome\n");
     else printf("not palindrome\n");
    
}
`},
                    {q:"Enter two numbers from users, one is base and second is power. Write the result ?",
                   a:`#include <stdio.h>
void main(){
    int base,exp,i,res=1;
    scanf("%d%d",&base,&exp);
    for(i=0;i<exp;i++) res *= base;
    printf("%d\n", res);
    
}
`},
                    {q:"Enter a number from user and print first digit of number ?",
                   a:`#include <stdio.h>
void main(){
    int n;
    scanf("%d",&n);
    if(n<0) n = -n;
    while(n>=10) n /= 10;
    printf("%d\n", n);
    
}
`},
                    {q:"Enter a number from user and print total from 0 to that number ?",
                   a:`#include <stdio.h>
void main(){
    int n,i,sum=0;
    scanf("%d",&n);
    for(i=0;i<=n;i++) sum += i;
    printf("%d\n", sum);
    
}
`},
                    {q:"Enter a number from user and find out factorial of that number ?",
                   a:`#include <stdio.h>
void main(){
    int n,i,f=1;
    scanf("%d",&n);
    for(i=1;i<=n;i++) f *= i;
    printf("%d\n", f);
    
}
`},
                    {q:"Enter two numbers from user and print range from first number to second number ?",
                   a:`#include <stdio.h>
void main(){
    int a,b,i;
    scanf("%d%d",&a,&b);
    for(i=a;i<=b;i++) printf("%d\n", i);
    
}
`},
                   {q: "Enter password from user maximum 20 digits / character press enter key if you want to exit ?",
                   a:`#include <stdio.h>
void main(){
    int i;
    for(i=1; i<=100; i++){
        printf("%d\n", i);
    }
    
}
`},
                    {q:"Write a program to print the counting 1 to 100 with one second delay ?",
                   a:`#include <stdio.h>
void main(){
    int a = 0, b = 1, c;
    while(a <= 100){
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }
    
}
`},
                    {q:"Write a program to find out the Fibonacci series/ 1 to 100 (like 0 1 1 2 3 5 8 13………..) ?",
                   a:`#include <stdio.h>
void main(){
    int a=0,b=1,c;
    printf("%d ", a);
    while(b<=100){
        printf("%d ", b);
        c = a + b;
        a = b; b = c;
    }
    printf("\n");
    
}
`},
                    {q:"Enter a character from user and that character should be alphabet ?",
                   a:`#include <stdio.h>
void main(){
    char ch;
    scanf(" %c",&ch);
    if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z'))
     printf("alphabet\n");
    else printf("not alphabet\n");
    
}
`},
                    {q:"Check numbers from user is palindrome or not ?",
                   a:`#include <stdio.h>
void main(){
    int n,t,rev=0;
    scanf("%d",&n);
    t = n; if(t<0) t = -t;
    while(t>0){ rev = rev*10 + t%10; t /= 10; }
    if(n>=0 && rev==n)
     printf("palindrome\n");
     else printf("not palindrome\n");
    return 0;
}
`},
                   {q: "Enter a number from user and check it is Armstrong number or not ?",
                   a:`#include <stdio.h>
void main(){
    int n,t,d,sum=0;
    scanf("%d",&n);
    t = n; if(t<0) t = -t;
    while(t>0)
    { d = t%10; 
    sum += d*d*d; t /= 10; }
    if(sum == n) printf("armstrong\n");
     else printf("not armstrong\n");
    return 0;
}
`},
  
                ]
            },
            {
                name: "NESTED LOOPS",
                questions: [
                    {q:"Write a program print the pattern on the screen i.e. ? 11111 11111 11111",
          a:`#include <stdio.h>
void main(){
    int i, j;
    for(i=1; i<=3; i++){
        for(j=1; j<=5; j++){
            printf("1");
        }
        printf("\n");
    }

}
`},      ]
            },
            {
                name: "MULTI-DIMENSION ARRAYS",
                questions: [
                    {q:"Enter the four number from user and print it into matrix",
                    a:`#include <stdio.h>
void main(){
    int a,b,c,d;
    scanf("%d%d%d%d",&a,&b,&c,&d);
    printf("%d %d\n", a, b);
    printf("%d %d\n", c, d);
    
}
`},
                    {q:"Enter the matrix from and transpose them ?",
                    a:`#include <stdio.h>
void main(){
    int r,c,i,j;
    int m[10][10];
    scanf("%d%d",&r,&c);
    for(i=0;i<r;i++)
        for(j=0;j<c;j++)
            scanf("%d",&m[i][j]);
    for(i=0;i<c;i++){
        for(j=0;j<r;j++)
         printf("%d ", m[j][i]);
        printf("\n");
    }
    
}
`},
                   {q:  "Enter 2 matrix from user and add them ?",
                    a:`#include <stdio.h>
void main(){
    int r,c,i,j;
    int a[10][10], b[10][10];
    scanf("%d%d",&r,&c);
    for(i=0;i<r;i++)
     for(j=0;j<c;j++)
     scanf("%d",&a[i][j]);
    for(i=0;i<r;i++) 
    for(j=0;j<c;j++)
     scanf("%d",&b[i][j]);
    for(i=0;i<r;i++){
        for(j=0;j<c;j++)
         printf("%d ", a[i][j] + b[i][j]);
        printf("\n");
    }
    return 0;
}
`}, 
                    {q:"Enter 2 matrix from user and subtract them ?",
                    a:`#include <stdio.h>
int main(){
    int r,c,i,j;
    int a[10][10], b[10][10];
    scanf("%d%d",&r,&c);
    for(i=0;i<r;i++)
     for(j=0;j<c;j++)
     scanf("%d",&a[i][j]);
    for(i=0;i<r;i++) 
    for(j=0;j<c;j++)
     scanf("%d",&b[i][j]);
    for(i=0;i<r;i++){
        for(j=0;j<c;j++)
         printf("%d ", a[i][j] - b[i][j]);
        printf("\n");
    }
    return 0;
}
`},
                   {q: "Enter 2 matrix from user and multiply them ?",
                    a:`#include <stdio.h>
int main(){
    int r1,c1,r2,c2,i,j,k;
    int a[10][10], b[10][10], res[10][10];
    scanf("%d%d",&r1,&c1);
    for(i=0;i<r1;i++) for(j=0;j<c1;j++) scanf("%d",&a[i][j]);
    scanf("%d%d",&r2,&c2);
    for(i=0;i<r2;i++) for(j=0;j<c2;j++) scanf("%d",&b[i][j]);
    if(c1 != r2){
        printf("invalid\n");

    }
    for(i=0;i<r1;i++) 
    for(j=0;j<c2;j++)
    { res[i][j]=0; 
    for(k=0;k<c1;k++)
     res[i][j] += a[i][k]*b[k][j]; }
    for(i=0;i<r1;i++){
        for(j=0;j<c2;j++)
         printf("%d ", res[i][j]);
        printf("\n");
    }
  
}
`},
                ]
            },
            {
                name: "OPERATORS",
                questions: [
                    
                   {q: "Write a program to show that example of pre-increment ?",
                     a:`#include <stdio.h>
int main(){
    int a;
    scanf("%d",&a);
    printf("%d\n", ++a);
    return 0;
}
`},
                    {q:"Write a program to show that example of post-increment ?",
                    a:`#include <stdio.h>
int main(){
    int a;
    scanf("%d",&a);
    printf("%d\n", a++);
    printf("%d\n", a);
    return 0;
}
`},
                    {q:"Write a program to show that example of pre-decrement ?",
                    a:`#include <stdio.h>
int main(){
    int a;
    scanf("%d",&a);
    printf("%d\n", --a);
    return 0;
}
`},
                    {q:"Write a program to show that example of post-decrement ?",
                    a:`#include <stdio.h>
int main(){
    int a;
    scanf("%d",&a);
    printf("%d\n", a--);
    printf("%d\n", a);
    return 0;
}
`},
                    {q:"Write a program to enter 2 numbers from user add the number and show the answer , again take 2 number from user subtract the number display the answer ,again take 2 number from user multiply the number display the answer and ,again take 2 number from the user divide the number display the answer ,again take 2 number find the remainder and display the answer ?",
                    a:`#include <stdio.h>
int main(){
    int a,b;
    scanf("%d%d",&a,&b);
    printf("Add: %d\n", a+b);
    scanf("%d%d",&a,&b);
    printf("Sub: %d\n", a-b);
    scanf("%d%d",&a,&b);
    printf("Mul: %d\n", a*b);
    scanf("%d%d",&a,&b);
    printf("Div: %d\n", a/b);
    scanf("%d%d",&a,&b);
    printf("Mod: %d\n", a%b);
    return 0;
}
`},
                    {q:"Write a program to enter a number from the user ,the length of the number is depend on the user ,programmer should print the last digit of number ?",
                    a:`#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    if(n<0) n = -n;
    printf("%d\n", n%10);
    return 0;
}
`},
                    {q:"Enter a decimal number from the user (float) and print the right hand side of the decimal point ?",
                    a:`#include <stdio.h>
int main(){
    float n;
    int left;
    scanf("%f",&n);
    left = (int)n;
    printf("%f\n", n - left);
    return 0;
}
`},
                    {q:"Enter a number from user and find out cube of numbers ?",
                    a:`#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    printf("%d\n", n*n*n);
    return 0;
}
`},
                    {q:"Enter float number from user and round of the number ?",
                    a:`#include <stdio.h>
int main(){
    float n;
    int r;
    scanf("%f",&n);
    if(n >= 0)
        r = (int)(n + 0.5);
    else
        r = (int)(n - 0.5);
    printf("%d\n", r);
    return 0;
}
`},
                    {q:"Enter a lower case character from user and print it into upper case ?",
                    a:`#include <stdio.h>
int main(){
    char ch;
    scanf(" %c",&ch);
    if(ch>='a' && ch<='z') ch = ch - 32;
    printf("%c\n", ch);
    return 0;
}
`},
                   {q: "Enter marks of students and calculate average of student's marks ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,marks,sum=0;
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%d",&marks);
        sum += marks;
    }
    printf("%d\n", sum/n);
    return 0;
}
`},
                   {q: "Calculate simple interest = (P x R x T)/ 100",
                    a:`#include <stdio.h>
int main(){
    float p,r,t,si;
    scanf("%f%f%f",&p,&r,&t);
    si = (p*r*t)/100;
    printf("%.2f\n", si);
    return 0;
}
`},
                ]
            },
            {
                name: "SINGLE DIMENSION ARRAYS",
                questions: [
                    {q:"Enter an array from user and display all the value ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100];
    scanf("%d",&n);
    for(i=0;i<n;i++) 
    scanf("%d",&a[i]);
    for(i=0;i<n;i++) 
    printf("%d ",a[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter an array from user and print the array in reverse order ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100];
    scanf("%d",&n);
    for(i=0;i<n;i++) 
    scanf("%d",&a[i]);
    for(i=n-1;i>=0;i--)
     printf("%d ",a[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter an array from user and copy the array into second array ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100],b[100];
    scanf("%d",&n);
    for(i=0;i<n;i++) 
    scanf("%d",&a[i]);
    for(i=0;i<n;i++) 
    b[i]=a[i];
    for(i=0;i<n;i++) 
    printf("%d ",b[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter an array from user and copy it into another array in reverse order ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100],b[100];
    scanf("%d",&n);
    for(i=0;i<n;i++) 
    scanf("%d",&a[i]);
    for(i=0;i<n;i++)
     b[i]=a[n-1-i];
    for(i=0;i<n;i++)
     printf("%d ",b[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter an array from user and print the number which is even ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100];
    scanf("%d",&n);
    for(i=0;i<n;i++)
     scanf("%d",&a[i]);
    for(i=0;i<n;i++) 
    if(a[i]%2==0) 
    printf("%d ",a[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter an array from user and print the number which is positive ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100];
    scanf("%d",&n);
    for(i=0;i<n;i++)
     scanf("%d",&a[i]);
    for(i=0;i<n;i++)
     if(a[i]>0) printf("%d ",a[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter an array from user and square all the values of array ?",
                    a:`#include <stdio.h>
int main(){
    int n,i,a[100];
    scanf("%d",&n);
    for(i=0;i<n;i++) 
    scanf("%d",&a[i]);
    for(i=0;i<n;i++)
     a[i]=a[i]*a[i];
    for(i=0;i<n;i++)
     printf("%d ",a[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter 5 values of array from user and print odd number of array ?",
                    a:`#include <stdio.h>
int main(){
    int a[5],i;
    for(i=0;i<5;i++) 
    scanf("%d",&a[i]);
    for(i=0;i<5;i++)
     if(a[i]%2!=0)
     printf("%d ",a[i]);
    printf("\n");
    return 0;
}
`},
                    {q:"Enter 5 values of array from user and add all values ?",
                    a:`#include <stdio.h>
int main(){
    int a[5],i,sum=0;
    for(i=0;i<5;i++)
    { scanf("%d",&a[i]); 
    sum+=a[i]; }
    printf("%d\n",sum);
    return 0;
}
`},
                    {q:"Enter 5 values of array from user, enter a value from user and search this value in array, if value is found then print found or not then print not found?",
                    a:`#include <stdio.h>
int main(){
    int a[5], i, num, found = 0;

    for(i=0; i<5; i++)
        scanf("%d", &a[i]);

    scanf("%d", &num);

    for(i=0; i<5; i++){
        if(a[i] == num){
            found = 1;
            break;
        }
    }

    if(found == 1)
        printf("found\n");
    else
        printf("not found\n");

    return 0;
}
`},
                    {q:"Enter five values of array and sort in ascending order ?",
                    a:`#include <stdio.h>
int main(){
    int a[5], i, j, temp;

    for(i=0; i<5; i++)
        scanf("%d", &a[i]);

    for(i=0; i<5; i++){
        for(j=i+1; j<5; j++){
            if(a[i] > a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    for(i=0; i<5; i++)
        printf("%d ", a[i]);

    return 0;
}
`},
                   {q: "Find maximum values of array ?",
                    a:`#include <stdio.h>
int main(){
    int a[5], i, max;

    for(i=0; i<5; i++)
        scanf("%d", &a[i]);

    max = a[0];

    for(i=1; i<5; i++){
        if(a[i] > max)
            max = a[i];
    }

    printf("%d\n", max);
    return 0;
}
`},
                    {q:"Find minimum values of array ?",
                    a:`#include <stdio.h>
int main(){
    int a[5], i, min;

    for(i=0; i<5; i++)
        scanf("%d", &a[i]);

    min = a[0];

    for(i=1; i<5; i++){
        if(a[i] < min)
            min = a[i];
    }

    printf("%d\n", min);
    return 0;
}
`},
                ]

            },
            {
                name: "FILE HANDLING",
                questions: [{ q:"NO HAVE QUESTIONS WAIT CHILL AND ENJOY.",},]},
            {
                name: "STRINGS",
                questions: [
                    
                    {q:"Enter a string from user and convert in uppercase ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i;
    printf("Enter a string: ");
    gets(str);
    for(i=0; str[i]!='\0'; i++) {
        if(str[i]>='a' && str[i]<='z')
            str[i]=str[i]-32;
    }
    printf("Uppercase: %s", str);
    return 0;
}
`},
                    {q:"Enter a string from user and convert into lowercase ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i;
    printf("Enter a string: ");
    gets(str);
    for(i=0; str[i]!='\0'; i++) {
        if(str[i]>='A' && str[i]<='Z')
            str[i]=str[i]+32;
    }
    printf("Lowercase: %s", str);
    return 0;
}
`},
                    {q:"Enter a string from user and convert into sentence case ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i;
    printf("Enter a string: ");
    gets(str);
    if(str[0]>='a' && str[0]<='z')
        str[0]=str[0]-32;
    for(i=1; str[i]!='\0'; i++) {
        if(str[i]>='A' && str[i]<='Z')
            str[i]=str[i]+32;
    }
    printf("Sentence case: %s", str);
    return 0;
}
`},
                    {q:"Enter a string from user and convert into title case ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i;
    printf("Enter a string: ");
    gets(str);
    for(i=0; str[i]!='\0'; i++) {
        if(i==0 || str[i-1]==' ') {
            if(str[i]>='a' && str[i]<='z')
                str[i]=str[i]-32;
        } else {
            if(str[i]>='A' && str[i]<='Z')
                str[i]=str[i]+32;
        }
    }
    printf("Title case: %s", str);
    return 0;
}
`},
                    {q:"Enter a string from user and convert into toggle case ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i;
    printf("Enter a string: ");
    gets(str);
    for(i=0; str[i]!='\0'; i++) {
        if(str[i]>='a' && str[i]<='z')
            str[i]=str[i]-32;
        else if(str[i]>='A' && str[i]<='Z')
            str[i]=str[i]+32;
    }
    printf("Toggle case: %s", str);
    return 0;
}
`},
                    {q:"Enter a string from user and final length of the string ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    printf("Enter a string: ");
    gets(str);
    printf("Length: %d", strlen(str));
    return 0;
}
`},
                    {q:"Enter a string from user and compare those string ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char s1[100], s2[100];
    printf("Enter first string: ");
    gets(s1);
    printf("Enter second string: ");
    gets(s2);
    if(strcmp(s1,s2)==0)
        printf("Strings are equal");
    else
        printf("Strings are not equal");
    return 0;
}
`},
                   {q: "Enter a string from user and concatenate the string ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char s1[100], s2[100];
    printf("Enter first string: ");
    gets(s1);
    printf("Enter second string: ");
    gets(s2);
    strcat(s1,s2);
    printf("Concatenated string: %s", s1);
    return 0;
}
`},
                    {q:"Enter a string from user and copy that string into another string ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char s1[100], s2[100];
    printf("Enter a string: ");
    gets(s1);
    strcpy(s2,s1);
    printf("Copied string: %s", s2);
    return 0;
}
`},
                    {q:"Enter the string from user ,enter a number from user ,if the user enter 0 then you will print first character of string ,if the user enter 1 then you will print second character of string ,if user enter 2 then you will print third character of string ,if user enter 3 then you point fourth character of string and if out of string then you will print out of bound ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int n;
    printf("Enter a string: ");
    gets(str);
    printf("Enter a number: ");
    scanf("%d", &n);
    if(n>=0 && n<strlen(str))
        printf("Character: %c", str[n]);
    else
        printf("Out of bound");
    return 0;
}
`},
                    {q:"Enter the string from user and print each character in new line ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i;
    printf("Enter a string: ");
    gets(str);
    for(i=0; str[i]!='\0'; i++)
        printf("%c\n", str[i]);
    return 0;
}
`},
                    {q:"Enter the string from user and copy reverse order into another string ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char s1[100], s2[100];
    int i, len;
    printf("Enter a string: ");
    gets(s1);
    len=strlen(s1);
    for(i=0; i<len; i++)
        s2[i]=s1[len-i-1];
    s2[len]='\0';
    printf("Reversed copy: %s", s2);
    return 0;
}
`},
                    {q:"Enter two string from user and print difference each character ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char s1[100], s2[100];
    int i;
    printf("Enter first string: ");
    gets(s1);
    printf("Enter second string: ");
    gets(s2);
    for(i=0; s1[i]!='\0' && s2[i]!='\0'; i++)
        printf("Difference at %d = %d\n", i, s1[i]-s2[i]);
    return 0;
}
`},
                   {q: "Enter the string from user and enter a character , it is exist or not ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100], ch;
    int i, found=0;
    printf("Enter a string: ");
    gets(str);
    printf("Enter a character: ");
    scanf("%c", &ch);
    for(i=0; str[i]!='\0'; i++) {
        if(str[i]==ch) {
            found=1;
            break;
        }
    }
    if(found)
        printf("Character exists");
    else
        printf("Character not found");
    return 0;
}
`},
                  {q:  "Enter the string from user and enter a character if it is exist then print the bound number ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100], ch;
    int i, found=0;
    printf("Enter a string: ");
    gets(str);
    printf("Enter a character: ");
    scanf("%c", &ch);
    for(i=0; str[i]!='\0'; i++) {
        if(str[i]==ch) {
            printf("Character found at position %d", i);
            found=1;
            break;
        }
    }
    if(!found)
        printf("Character not found");
    return 0;
}
`},
               {q:     "Enter the string from user and count all vowels ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int i, count=0;
    printf("Enter a string: ");
    gets(str);
    for(i=0; str[i]!='\0'; i++) {
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||
           str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U')
            count++;
    }
    printf("Total vowels: %d", count);
    return 0;
}
`},
                   {q: "Enter the string from user and enter bound number and print character on that bound ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100];
    int pos;
    printf("Enter a string: ");
    gets(str);
    printf("Enter position: ");
    scanf("%d", &pos);
    if(pos>=0 && pos<strlen(str))
        printf("Character: %c", str[pos]);
    else
        printf("Out of bound");
    return 0;
}
`},
                {q:    "String palindrome example (using reverse) ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    char str[100], rev[100];
    printf("Enter a string: ");
    gets(str);
    strcpy(rev,str);
    strrev(rev);
    if(strcmp(str,rev)==0)
        printf("Palindrome string");
    else
        printf("Not a palindrome");
    return 0;
}
`},
                    {q:"Enter the data from user the data consist of roll no. ,name ,class , marks of 5 subjects ?",
                    a:`#include <stdio.h>
#include <string.h>
int main() {
    int roll, marks[5], total=0, i;
    char name[50], className[20];
    printf("Enter Roll No: ");
    scanf("%d", &roll);
    printf("Enter Name: ");
    scanf("%s", name);
    printf("Enter Class: ");
    scanf("%s", className);
    printf("Enter marks of 5 subjects:\n");
    for(i=0; i<5; i++) {
        printf("Subject %d: ", i+1);
        scanf("%d", &marks[i]);
        total+=marks[i];
    }
    printf("\nRoll No: %d\nName: %s\nClass: %s\nTotal Marks: %d", roll, name, className, total);
    return 0;
}
`},
                
                ]
            },
             {
                name: "POINTER",
                questions: [{ q:"NO HAVE QUESTION WAIT CHILL AND ENJOY.",},]},
 {
                name: "RECURSION",
                questions: [{ q:"NO HAVE QUESTION WAIT CHILL AND ENJOY.",},]},
                 {
                name: "UNION",
                questions: [{ q:"NO HAVE QUESTION WAIT CHILL AND ENJOY.",},]},
                {
                name: "STRUCTURE",
                questions: [
                    
                   {q: "Create structure of employee which there is emp.ID, name, designation of 50 employees from user, print details in tabular form ?",
                    a:`#include <stdio.h>
#include <string.h>

struct Employee {
    int id;
    char name[50];
    char designation[50];
};

int main() {
    struct Employee emp[50];
    int i;
    for(i=0; i<50; i++) {
        printf("Enter ID for employee %d: ", i+1);
        scanf("%d", &emp[i].id);
        getchar();
        printf("Enter name for employee %d: ", i+1);
        gets(emp[i].name);
        printf("Enter designation for employee %d: ", i+1);
        gets(emp[i].designation);
    }
    printf("\nID\tName\t\tDesignation\n");
    for(i=0; i<50; i++)
        printf("%d\t%s\t\t%s\n", emp[i].id, emp[i].name, emp[i].designation);
    return 0;
}
`},
                  {q:  "Create structure of employee which there is emp.ID, name, designation of 50 employees from user and print only name of the employee ?",
                a:`#include <stdio.h>
#include <string.h>

struct Employee {
    int id;
    char name[50];
    char designation[50];
};

int main() {
    struct Employee emp[50];
    int i;
    for(i=0; i<50; i++) {
        printf("Enter ID for employee %d: ", i+1);
        scanf("%d", &emp[i].id);
        getchar();
        printf("Enter name for employee %d: ", i+1);
        gets(emp[i].name);
        printf("Enter designation for employee %d: ", i+1);
        gets(emp[i].designation);
    }
    printf("\nEmployee Names:\n");
    for(i=0; i<50; i++)
        printf("%d. %s\n", i+1, emp[i].name);
    return 0;
}
`},
                {q:    "Create structure of employee which there is emp.ID, name, designation of 50 employees from user and print name character with emp.ID in tabular form ?",
                a:`#include <stdio.h>
#include <string.h>

struct Employee {
    int id;
    char name[50];
    char designation[50];
};

int main() {
    struct Employee emp[50];
    int i, j;
    for(i=0; i<50; i++) {
        printf("Enter ID for employee %d: ", i+1);
        scanf("%d", &emp[i].id);
        getchar();
        printf("Enter name for employee %d: ", i+1);
        gets(emp[i].name);
        printf("Enter designation for employee %d: ", i+1);
        gets(emp[i].designation);
    }
    printf("\nID\tName Characters\n");
    for(i=0; i<50; i++) {
        printf("%d\t", emp[i].id);
        for(j=0; emp[i].name[j]!='\0'; j++)
            printf("%c ", emp[i].name[j]);
        printf("\n");
    }
    return 0;
}
`} ,   
                {q:    "Enter student details like roll name, fee, DOB and print all the detail by ascending order of roll number ?",
               a:`#include <stdio.h>
#include <string.h>

struct Student {
    int roll;
    char name[50];
    float fee;
    char dob[20];
};

int main() {
    struct Student s[50];
    int n, i, j;
    struct Student temp;
    printf("How many students (max 50): ");
    scanf("%d", &n);
    getchar();
    for(i=0; i<n; i++) {
        printf("Enter roll for student %d: ", i+1);
        scanf("%d", &s[i].roll);
        getchar();
        printf("Enter name for student %d: ", i+1);
        gets(s[i].name);
        printf("Enter fee for student %d: ", i+1);
        scanf("%f", &s[i].fee);
        getchar();
        printf("Enter DOB (dd-mm-yyyy) for student %d: ", i+1);
        gets(s[i].dob);
    }
    for(i=0; i<n-1; i++) {
        for(j=0; j<n-1-i; j++) {
            if(s[j].roll > s[j+1].roll) {
                temp = s[j];
                s[j] = s[j+1];
                s[j+1] = temp;
            }
        }
    }
    printf("\nRoll\tName\t\tFee\tDOB\n");
    for(i=0; i<n; i++)
        printf("%d\t%s\t\t%.2f\t%s\n", s[i].roll, s[i].name, s[i].fee, s[i].dob);
    return 0;
}
`},
                ]

            }
        ]; 
        
         
let currentTopicIndex = -1;
let currentQuestionIndex = -1;

function initApp() {
  showAllTopics();
}


function showAllTopics() {
  let container = document.getElementById("topics-container");
  container.innerHTML = "";


  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    let div = document.createElement("div");
    div.className = "topic-card";
    div.innerHTML = "<h3>" + t.name + "</h3><p>" + t.questions.length + " Questions</p>";
    div.onclick = function() {
      openTopic(i);
    };
    container.appendChild(div);
  }
}


function openTopic(i) {
  currentTopicIndex = i;
  let topic = topics[i];
  document.getElementById("topic-title").textContent = topic.name;

  let qContainer = document.getElementById("questions-container");
  qContainer.innerHTML = "";

  for (let j = 0; j < topic.questions.length; j++) {
    let q = topic.questions[j];
    let li = document.createElement("li");
    li.className = "question-item";
    li.innerHTML = "<strong>" + (j + 1) + ".</strong> " + (q.q || q);
    li.onclick = function() {
      openAnswer(j);
    };
    qContainer.appendChild(li);
  }


  document.getElementById("topics-view").classList.add("hidden");
  document.getElementById("questions-view").classList.remove("hidden");
  document.getElementById("answer-view").classList.add("hidden");
}


function openAnswer(j) {
  currentQuestionIndex = j;
  let topic = topics[currentTopicIndex];
  let question = topic.questions[j];

  let qText = question.q || question;
  let aText = question.a || "(Write your answer here...)";

  document.getElementById("question-display").textContent = qText;
  document.getElementById("answer-display").innerHTML = "<div class='answer-text'>" + escapeCode(aText) + "</div>";


  document.getElementById("topics-view").classList.add("hidden");
  document.getElementById("questions-view").classList.add("hidden");
  document.getElementById("answer-view").classList.remove("hidden");
}


function escapeCode(txt) {
  return txt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


function showTopics() {
  document.getElementById("topics-view").classList.remove("hidden");
  document.getElementById("questions-view").classList.add("hidden");
  document.getElementById("answer-view").classList.add("hidden");
}

function showQuestions() {
  document.getElementById("topics-view").classList.add("hidden");
  document.getElementById("questions-view").classList.remove("hidden");
  document.getElementById("answer-view").classList.add("hidden");
}

initApp();


