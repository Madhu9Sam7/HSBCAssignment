package tests;

public class ExceptionTestingAssign {

	public static void main(String[] args) {

		try{
			Thread.sleep((long) 0.00);
			System.out.println("This is me");
		}catch(InterruptedException e){
			throw new MyThreadClass("Inside My Thread Class");
		}
		
	}

}
