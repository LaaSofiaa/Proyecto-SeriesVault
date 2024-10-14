package proyecto.personal.seriesVault.Domain;

import java.time.LocalDate;

public class Serie {

    //atributos
    private String id;
    private String title;
    private String description;
    private Integer rating;
    private String image;
    private LocalDate date;

    //constructor
    public Serie(LocalDate date, String description, String image, Integer rating, String title) {
        this.date = date;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.title = title;
    }

    //getters and setters

    public LocalDate getDate() {return date;}

    public void setDate(LocalDate date) {this.date = date;}

    public String getTitle() {return title;}

    public void setTitle(String title) {this.title = title;}

    public Integer getRating() {return rating;}

    public void setRating(Integer rating) {this.rating = rating;}

    public String getImage() {return image;}

    public void setImage(String image) {this.image = image;}

    public String getId() {return id;}

    public void setId(String id) {this.id = id;}

    public String getDescription() {return description;}

    public void setDescription(String description) {this.description = description;}
}
