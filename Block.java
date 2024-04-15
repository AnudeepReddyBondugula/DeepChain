import java.util.Date;

public class Block {

    public String hash;
    public String previousHash;
    private String data; // * Data is stored as simple string
    private long timeStamp; // * Time in milliseconds

    // * Constructors
    public Block(String data, String previousHash) {
        this.data = data;
        this.previousHash = previousHash;
        this.timeStamp = new Date().getTime();
        this.hash = calculateHash();
    }


    public String calculateHash() {
        String calculatedHash = StringUtil.applySha256(
            previousHash + Long.toString(timeStamp) + data
        );

        return calculatedHash;
    }
}