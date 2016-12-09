# The Information Analyzer Notifications Sample

To develop end-to-end governance, you must be able to efficiently interact with various kinds of users and applications. This can be as simple as writing an email to notify a data analyst about new analysis results, or it can require complex workflows as provided with IBM Stewardship Center. With this sample, you will learn how to subscribe to analysis events from IBM InfoSphere Information Analyzer Thin Client to get email notifications. You will use Apache Kafka and Node.js, the emerging open source technologies for high-throughput, event-driven applications. 

## What you'll need

* Information Server 11.5.0.1 or higher
* Node.js 4.6.0 or higher

## Building the application

Create Use the magical button below to automatically deploy this sample application to Bluemix. 

0. On the system having Node.js installed, create a **myapp** directory to hold your application and make that you working directory.
0. In your application directory, run the **npm init** command to create a package.json file for your application. This command prompts you for a number of things, such as the name and version of your application. You can simply hit RETURN to accept the defaults. The default name of your application is **index.js**. 
0. Run the **npm install kafka-node --save** command to install kafka-node in your application directory. Kafka-node is a Node.js client for Apache Kafka. You can ignore any error messages regarding Python.
0. Run the **npm install nodemailer --save** command to install nodemailer in your application directory. Nodemailer allows sending e-mails from Node.js with plaintext and HTML body.
0. Download the index.js file from the repository and copy it to your application directory
0. Follow the instructions in the file (search for TODO) to specify/configure your IIS host name and the sender and receiver email accounts

## Running the sample

0. From the myapp folder start your application: **node index.js**.
0. Use the InfoSphere Information Analyzer thin client to analyze your data sets. See the [Analyzing data with InfoSphere Information Analyzer thin client] (http://www.ibm.com/support/knowledgecenter/en/SSZJPZ_11.5.0/com.ibm.swg.im.iis.ia.product.doc/topics/t_browser_client_container.html) page to learn how to add data sets and run a column analysis.
0. Run the column analysis of your data set. When the analysis is finished, the “IA_DATAQUALITY_ANALYSIS_FINISHED_EVENT” event is generated and an according email is sent to the receiver mail account as defined in the index.js file.
