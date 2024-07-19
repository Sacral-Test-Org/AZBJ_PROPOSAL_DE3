package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.MembershipDetailsRepository;
import com.azbj.proposalde3.model.MembershipDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MembershipDetailsService {

    @Autowired
    private MembershipDetailsRepository membershipDetailsRepository;

    public List<MembershipDetails> fetchMembershipDetails(String applicationNumber, String proposalType) {
        return membershipDetailsRepository.findMembershipDetails(applicationNumber, proposalType);
    }
}
