const { constants } = require('../../utils/get-constants');
const projectDao = require('../../dao/project.dao');
const { generateResponse } = require('../../utils/groq.util');
const { generatePrompt } = require('../../utils/generate-prompt.util');
const pdfParse = require("pdf-parse");

sow = `SOW
 Project Title:
 "Customer Relationship Management (CRM) System Implementation for ABC Corp."
 
Objective:
 The objective of this project is to implement a robust CRM system for ABC Corp. to improve customer engagement, optimize sales operations, 
and provide comprehensive customer insights.
 
Scope of Work:
 Requirement gathering and analysis
 System design and architecture
 Development and customization
 Integration with existing systems (ERP, email, and customer portal)
 Quality assurance and testing
 Deployment and post-deployment support
 Training and documentation
 Project Timeline:
 Start Date: January 1, 2024
 End Date: December 31, 2024
 Budget:
 Total Project Budget: $500,000
 
Development Costs: $300,000
 Testing Costs: $100,000
 Training and Support Costs: $100,000
 Technical Requirements:
 Platform: Microsoft Dynamics 365
 Languages: C#, JavaScript
 Integration: REST APIs for ERP and Email Systems
Database: Microsoft SQL Server
 Team Size Requirements:
 Project Manager: 1
 Business Analyst: 2
 Developers: 5
 QA Engineers: 3
 Deployment Specialists: 2
 Trainers: 2
 Project Milestones:
 Completion of Requirement Gathering: March 1, 2024
 Design Approval: May 1, 2024
 Development Phase Complete: August 31, 2024
 System Testing Complete: October 15, 2024
 Deployment Complete: November 15, 2024
 Post-deployment Support and Training Complete: December 31, 2024
 Deliverables:
 Requirement Documentation
 CRM System Design Document
 CRM Application Prototype
 Fully Developed CRM System
 Testing and QA Reports
 Deployment Scripts and Documentation
 Training Materials`


module.exports.createProjectRecord = async (req, res, next) => {
    try {
        const projectData = {
            name: req.body.projectTitle,
            description: req.body.description,
            start_date: req.body.startDate || new Date(),
            end_date: new Date(req.body.timeline) || new Date(),
            status: req.body.status || 'DRAFT',
            tech_stack: req.body.preferredSkills.split(','),
            manager_id: req.body.managerId
        }
        console.log("project data",projectData)
        const project = await projectDao.createProject(projectData);
        const availableUsers = await projectDao.findAvailableUsers();
        const text = await generatePrompt(sow);
        const llmResponse = await generateResponse(text);
        const formattedResponse = JSON.parse(extractCodeBlocks(llmResponse).join('\n'));
        return res.status(constants.HTTP_STATUS_200).send({ "message": "Project Created", data: formattedResponse });
    } catch (error) {
        console.log(error);
        return res.status(constants.HTTP_STATUS_500).send({ "message": "Internal Server Error" });
    }
}

function extractCodeBlocks(text) {
    const regex = /```([\s\S]*?)```/g;
    const matches = text.match(regex);

    if (matches) {
        return matches.map(match => match.replace(/```/g, ''));
    } else {
        return [];
    }
}