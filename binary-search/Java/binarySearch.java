class binarySearch{
    public static void main(String[] args) {
        int[] myArray = { 1, 3, 5, 6, 8, 9, 13, 24, 56, 78 };
        int value = 13;
        binarySearch(myArray, value);
    }

    public static void binarySearch(int[] arr, int value){
        int low = 0;
        int high = arr.length -1 ;
        int mid = (low + high)/2;

        while( low <= high){
            mid = (low + high)/2;
            if(value == arr[mid]){
                System.out.println("Element has been found at index: "+ mid);
                break;
            } else if ( arr[mid] > value){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        System.out.println("Element has not been found ");
    }
}