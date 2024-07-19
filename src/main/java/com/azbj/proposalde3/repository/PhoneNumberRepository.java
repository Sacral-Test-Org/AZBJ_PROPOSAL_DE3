package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PhoneNumberRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean validatePhoneNumber(String phoneNumber) {
        String sql = "SELECT COUNT(*) FROM phone_numbers WHERE phone_number = ?";
        Integer count = jdbcTemplate.queryForObject(sql, new Object[]{phoneNumber}, Integer.class);
        return count != null && count > 0;
    }

    public PhoneNumber fetchPhoneNumberData(String currentItem, String currentBlock, String proposalType) {
        String sql = "SELECT * FROM phone_numbers WHERE current_item = ? AND current_block = ? AND proposal_type = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentItem, currentBlock, proposalType}, (rs, rowNum) -> {
            PhoneNumber phoneNumber = new PhoneNumber();
            phoneNumber.setPhoneNumber(rs.getString("phone_number"));
            phoneNumber.setCurrentItem(rs.getString("current_item"));
            phoneNumber.setCurrentBlock(rs.getString("current_block"));
            phoneNumber.setProposalType(rs.getString("proposal_type"));
            return phoneNumber;
        });
    }
}
