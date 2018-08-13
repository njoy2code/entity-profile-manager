'use strict';

const path = require('path');
const fs = require('fs');

let dbConnObject;
let moduleState = "INIT";

exports.getProfile = function getProfile (callback) {

};

exports.createProfile = function createProfile (callback) {

};

exports.updateProfile = function updateProfile (callback) {

};

exports.deleteProfile = function deleteProfile (callback) {

};

exports.updateFactoryProfile = function updateFactoryProfile (callback) {

};

exports.deleteFactoryProfile = function deleteFactoryProfile (callback) {

};

exports.configure = function configure (objConfig, callback) {

};

exports.deinitialize = function deinitialize (callback) {

};

exports.initialize = function initialize (objConfig, callback) {

    /* 
        0. Validate configuration provided
        1. Read configuration if no objConfig provided
        2. Check for deployment required
        3. Open DB connection and maintain it persistently
        4. 
    */
};

exports.deploy = function deploy (objConfig, callback) {

};
