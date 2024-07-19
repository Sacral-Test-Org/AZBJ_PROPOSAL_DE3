package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "azbj_states")
public class State {

    @Id
    @Column(name = "scode")
    private String scode;

    @Column(name = "state_name")
    private String stateName;

    public State() {}

    public State(String scode, String stateName) {
        this.scode = scode;
        this.stateName = stateName;
    }

    public String getScode() {
        return scode;
    }

    public void setScode(String scode) {
        this.scode = scode;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    @Override
    public String toString() {
        return "State{" +
                "scode='" + scode + '\'' +
                ", stateName='" + stateName + '\'' +
                '}';
    }
}
