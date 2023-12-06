package HR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISHRСотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Дата_приема")
    private Date дата_приема;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Контакты")
    private String контакты;

    @Column(name = "Образование")
    private String образование;

    @Column(name = "Опыт_работы")
    private String опыт_работы;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otdely")
    @Convert("Otdely")
    @Column(name = "Отделы", length = 16, unique = true, nullable = false)
    private UUID _otdelyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otdely", insertable = false, updatable = false)
    private Otdely otdely;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public Date getДата_приема() {
      return дата_приема;
    }

    public void setДата_приема(Date дата_приема) {
      this.дата_приема = дата_приема;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getКонтакты() {
      return контакты;
    }

    public void setКонтакты(String контакты) {
      this.контакты = контакты;
    }

    public String getОбразование() {
      return образование;
    }

    public void setОбразование(String образование) {
      this.образование = образование;
    }

    public String getОпыт_работы() {
      return опыт_работы;
    }

    public void setОпыт_работы(String опыт_работы) {
      this.опыт_работы = опыт_работы;
    }


}