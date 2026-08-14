#!/bin/bash

# Create all directories
mkdir -p /home/a33ba508/iconicinfosec/CyberSecurity_Lab/labs
mkdir -p /home/a33ba508/iconicinfosec/CyberSecurity_QA/easy
mkdir -p /home/a33ba508/iconicinfosec/CyberSecurity_QA/hard

# Copy CSS files from existing structure
cd /home/a33ba508

# Copy lab styles
if [ -f "Iconic_Infosec_Site/CCNP_Lab/lab-styles.css" ]; then
    cp Iconic_Infosec_Site/CCNP_Lab/lab-styles.css iconicinfosec/CyberSecurity_Lab/
fi

# Copy lab script
if [ -f "Iconic_Infosec_Site/CCNP_Lab/lab-script.js" ]; then
    cp Iconic_Infosec_Site/CCNP_Lab/lab-script.js iconicinfosec/CyberSecurity_Lab/
fi

# Copy QA styles
if [ -f "Iconic_Infosec_Site/CCNP_QA/qa-styles.css" ]; then
    cp Iconic_Infosec_Site/CCNP_QA/qa-styles.css iconicinfosec/CyberSecurity_QA/
fi

# Copy QA script
if [ -f "Iconic_Infosec_Site/CCNP_QA/qa-script.js" ]; then
    cp Iconic_Infosec_Site/CCNP_QA/qa-script.js iconicinfosec/CyberSecurity_QA/
fi

echo "✅ All directories and files created!"
ls -R /home/a33ba508/iconicinfosec/

