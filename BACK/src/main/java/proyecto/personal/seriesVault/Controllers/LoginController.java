package proyecto.personal.seriesVault.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyecto.personal.seriesVault.Domain.User;
import proyecto.personal.seriesVault.Services.UserService;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins ="*")
    @PostMapping("/register")
    public ResponseEntity<String>register(@RequestBody User user) throws Exception {
        try {
            userService.createUser(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
