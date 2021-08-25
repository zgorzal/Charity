package pl.zgorzal.charity.category;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = Category.TABLE_NAME)
public class Category {
    public static final String TABLE_NAME = "categories";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
