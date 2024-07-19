package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.StripNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class StripNumberRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public StripNumber getStripNumber(String currentBlock, String currentItem, String proposalType) {
        String sql = "SELECT MAX(strip_no) as strip_no FROM azbj_strip_field_mapping a " +
                     "WHERE block_name = ? AND field_name = ? AND proposal_type = ? " +
                     "AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b " +
                     "WHERE a.proposal_type = b.proposal_type " +
                     "AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)";

        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{currentBlock, currentItem, proposalType}, (rs, rowNum) -> {
                StripNumber stripNumber = new StripNumber();
                stripNumber.setStripNo(rs.getInt("strip_no"));
                return stripNumber;
            });
        } catch (Exception e) {
            StripNumber stripNumber = new StripNumber();
            stripNumber.setStripNo(null);
            return stripNumber;
        }
    }
}