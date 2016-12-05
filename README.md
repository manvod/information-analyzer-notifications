# The Information Analyzer Notifications Sample

To develop end-to-end governance, you must be able to efficiently interact with various kinds of users and applications. This can be as simple as writing an email to notify a data analyst about new analysis results, or it can require complex workflows as provided with IBM Stewardship Center. With this sample, you will learn how to subscribe to analysis events from IBM InfoSphere Information Analyzer Thin Client to get email notifications. You will use Apache Kafka and Node.js, the emerging open source technologies for high-throughput, event-driven applications. 

## What you'll need

* Information Server 11.5.0.1 or higher
* Node.js 4.6.0 or higher

## Building the application

Create Use the magical button below to automatically deploy this sample application to Bluemix. 

0. On the system having Node.js installed, create a **myapp** directory to hold your application and make that you working directory.
0. In your application directory, run the **npm init** command to create a package.json file for your application. This command prompts you for a number of things, such as the name and version of your application. You can simply hit RETURN to accept the defaults. The default name of your application is **index.js**. 
0. Run the **npm install express --save** command to install Express in your application directory. Express is a minimal and flexible Node.js web application framework.
0. Run the **npm install kafka-node --save** command to install kafka-node in your application directory. Kafka-node is a Node.js client for Apache Kafka. You can ignore any error messages regarding Python.
0. Run the **npm install nodemailer --save** command to install nodemailer in your application directory. Nodemailer allows sending e-mails from Node.js with plaintext and HTML body.
0. Name your new app and specify any options as needed if you do not like the defaults.
0. Click DEPLOY.

When the deployment is completed, a private DevOps Services project is set up. The project contains a running instance of the sample application, a configured build pipeline and a dedicated Git repository that you can use to make updates to the application.

You need to complete the build pipeline and rebuild the project with the following steps:

0. Click EDIT CODE
0. Click BUILD & DEPLOY to open the pipeline page
0. In the Build Stage, click the Stage Configuration icon and select Configure Stage
0. Modify the second line of the Build Shell Command script to **mvn -B package install**
0. In the Build Archive Directory field, enter **app**
0. Click SAVE
0. In the Build Stage, click the Run Stage icon. After the build, the Build Stage will automatically trigger the Deploy Stage. Wait for the Deploy Stage to finish.

## Running the application

0. Open your Bluemix dashboard, click the new application and use the displayed Routes URL to open the web interface. The application is now waiting for events sent by the Information Server Kafka client sample.
0. Follow the instructions on the bottom of the web interface to download and run the Kafka client sample that was automatically build by the Build Stage.
0. After the Kafka client sample is started, the application updates the displayed charts as events come in.
