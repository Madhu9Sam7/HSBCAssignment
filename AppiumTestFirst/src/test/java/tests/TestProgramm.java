package tests;

import java.util.Scanner;

public class TestProgramm {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter String");
		String temp = sc.next();
		System.out.println("Input String is " + temp);
		int k = 0;
		int p = temp.length();
		for (int i = k; i < temp.length(); i++) {
			if (k == p) {
				break;
			}
			System.out.print(temp.charAt(i));

			for (int j = p-1; j >= 0;) {
				
				System.out.print(temp.charAt(j));
				k++;
				if (k == p) {
					break;
				}
				p--;

				break;
			}
		}

	}

}
