package com.azbj.proposalde3.model;

public class Questionnaire {
    private Long questionId;
    private Long subQuestionId;
    private String correctValue;
    private String pregnancyStatus;
    private String alcoholismStatus;
    private String answerDescription;
    private String errorMessage;
    private String response;

    // Getters and Setters
    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getSubQuestionId() {
        return subQuestionId;
    }

    public void setSubQuestionId(Long subQuestionId) {
        this.subQuestionId = subQuestionId;
    }

    public String getCorrectValue() {
        return correctValue;
    }

    public void setCorrectValue(String correctValue) {
        this.correctValue = correctValue;
    }

    public String getPregnancyStatus() {
        return pregnancyStatus;
    }

    public void setPregnancyStatus(String pregnancyStatus) {
        this.pregnancyStatus = pregnancyStatus;
    }

    public String getAlcoholismStatus() {
        return alcoholismStatus;
    }

    public void setAlcoholismStatus(String alcoholismStatus) {
        this.alcoholismStatus = alcoholismStatus;
    }

    public String getAnswerDescription() {
        return answerDescription;
    }

    public void setAnswerDescription(String answerDescription) {
        this.answerDescription = answerDescription;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}