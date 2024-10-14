package proyecto.personal.seriesVault.Domain;

import java.util.List;

public class User {

    //atributos
    private String id;
    private String name;
    private String userName;
    private String email;
    private String password;
    private List<Serie> seriesList;

    //constructor
    public User(String userName, String password, String name, String email) {
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    //geters and setters

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public String getId() {return id;}

    public void setId(String id) {this.id = id;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getPassword() {return password;}

    public void setPassword(String password) {this.password = password;}

    public List<Serie> getSeriesList() {return seriesList;}

    public void setSeriesList(List<Serie> seriesList) {this.seriesList = seriesList;}

    public String getUserName() {return userName;}

    public void setUserName(String userName) {this.userName = userName;}
}
