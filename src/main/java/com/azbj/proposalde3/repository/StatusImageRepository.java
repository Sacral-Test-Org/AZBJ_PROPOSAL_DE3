package com.azbj.proposalde3.repository;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class StatusImageRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String loadImageData(String currentBlock, String currentItem, String proposalType) {
        String sql = "SELECT MAX(strip_no) " +
                     "FROM azbj_strip_field_mapping a " +
                     "WHERE block_name = ? " +
                     "AND field_name = ? " +
                     "AND proposal_type = ? " +
                     "AND EXISTS (" +
                     "    SELECT 1 " +
                     "    FROM azbj_proposal_stripes b " +
                     "    WHERE a.proposal_type = b.proposal_type " +
                     "    AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0" +
                     ")";

        return jdbcTemplate.queryForObject(sql, new Object[]{currentBlock, currentItem, proposalType}, String.class);
    }
}
