package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ChildCoversRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChildCoversService {

    @Autowired
    private ChildCoversRepository childCoversRepository;

    public void deleteChildCovers() {
        // Navigate to the child cover records section
        List<ChildCover> childCovers = childCoversRepository.findAll();

        // Count the total number of child cover records
        int totalRecords = childCovers.size();

        // Iterate through each child cover record
        for (int i = 0; i < totalRecords; i++) {
            ChildCover childCover = childCovers.get(i);

            // Check if the child cover record is marked for deletion
            if ("Y".equals(childCover.getDelChk())) {
                // Delete the record
                childCoversRepository.deleteById(childCover.getId());
            }
        }

        // Navigate back to the first record (if needed)
        // This can be implemented as per the specific requirements of the navigation logic
    }
}
