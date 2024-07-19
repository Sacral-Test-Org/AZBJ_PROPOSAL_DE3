package com.azbj.proposalde3.service;

import com.azbj.proposalde3.model.DocumentDE;
import com.azbj.proposalde3.repository.DocumentDERepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentDEService {

    @Autowired
    private DocumentDERepository documentDERepository;

    private ParameterList paramList;
    private int v_document_de_cnt;

    public void createParameterList(String listName) {
        if (paramList != null && paramList.getName().equals(listName)) {
            paramList.destroy();
        }
        paramList = new ParameterList(listName);
    }

    public void addParameter(String listName, String paramName, Object paramValue) {
        if (paramList != null && paramList.getName().equals(listName)) {
            paramList.addParameter(paramName, paramValue);
        }
    }

    public String navigateToAMLBlock() {
        // Simulate navigating to the AML block and iterating through records
        // In a real application, this would involve database operations or other logic
        String panCardValue = null;
        for (DocumentDE record : documentDERepository.findAll()) {
            if ("PC".equals(record.getProofType())) {
                panCardValue = record.getPanCard();
                break;
            }
        }
        return panCardValue;
    }

    public void incrementCounter() {
        v_document_de_cnt++;
    }

    public void callFinancialDocumentForm(ParameterList paramList) {
        // Simulate calling another form with the parameter list
        // In a real application, this would involve UI navigation or other logic
        System.out.println("Calling AZBJ_FINANCIAL_DOCUMENT with parameters: " + paramList);
    }

    public void handleDocumentDEButton() {
        createParameterList("Param1");
        addParameter("Param1", "PARAM_APPLN_NO", correct_value.getApplnNo());
        addParameter("Param1", "PARAM_PROPOSAL_NO", null);
        addParameter("Param1", "PARAM_MODULE_NAME", "DEQC");
        addParameter("Param1", "PARAM_PH_DOB", correct_value.getPhDob());

        String panCardValue = navigateToAMLBlock();
        if (panCardValue != null) {
            addParameter("Param1", "PARAM_PAN", panCardValue);
        }

        incrementCounter();
        callFinancialDocumentForm(paramList);
    }

    // Inner class to simulate parameter list functionality
    private class ParameterList {
        private String name;
        private Map<String, Object> parameters;

        public ParameterList(String name) {
            this.name = name;
            this.parameters = new HashMap<>();
        }

        public String getName() {
            return name;
        }

        public void addParameter(String paramName, Object paramValue) {
            parameters.put(paramName, paramValue);
        }

        public void destroy() {
            parameters.clear();
        }

        @Override
        public String toString() {
            return "ParameterList{" +
                    "name='" + name + '\'' +
                    ", parameters=" + parameters +
                    '}';
        }
    }
}
