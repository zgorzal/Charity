package pl.zgorzal.charity.institution;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = Institution.TABLE_NAME)
public class Institution {
    public static final String TABLE_NAME = "institutions";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;
}
