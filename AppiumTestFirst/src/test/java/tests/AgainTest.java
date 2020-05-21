package tests;

import java.util.Scanner;

public class AgainTest {

	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Input String ");
		String temp=sc.next();
		char[] one=new char[temp.length()/2];
		char[] two=new char[temp.length()-one.length];
		System.out.println(one.length);
		System.out.println(two.length);
		for(int i=0;i<one.length;i++){
			one[i]=temp.charAt(i);			
		}
		for(int i=one.length;i<two.length;i++){
			two[i]=temp.charAt(i);			
		}
		for(int i=0;i<one.length;i++){
			System.out.println(one[i]);
		}
		for(int i=0;i<two.length;i++){
			System.out.println(two[i]);
		}
	}

}
