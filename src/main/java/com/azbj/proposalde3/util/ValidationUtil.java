package com.azbj.proposalde3.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class ValidationUtil {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean checkProductGroup(String productCode) {
        String sql = "SELECT azbj_pk_nb_general.group_product(?) FROM dual";
        Boolean result = jdbcTemplate.queryForObject(sql, new Object[]{productCode}, Boolean.class);
        return result != null && result;
    }
}
