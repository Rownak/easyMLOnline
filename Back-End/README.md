
------- How to create server on AWS
1. Start the AWS server
    a. sign in to AWS server
    b. EC2
    c. Launch Instance
    d. Family: General purpose, Type: t2.micro (free)
    e. review and launch
    f. Create new keypair- key pair name: test-keypair-django
    g. use the "test-keypair-django.pem" file to connect
    h. chmod 400 test-keypair-django.pem

2. Setting AWS server
    a. user root53 service to create a domain name
    b. for now use - Public DNS IPv4
    c. IPv4 Public IP is the host, you need to copy this to ALLOWED_HOSTS of the project
    d. right click and click connect
    f. go the the folder where pem file located and use the command:
      ssh -i IDRProject.pem ubuntu@easyonline.com	

3. Inside the server: install nginx and configure
   a. git clone https://github.com/Sebezayala/IDRProject.git
   b. pip install gunicorn
   c. sudo apt-get install -y nginx
   d. sudo nginx :- start nginx
   e. Still not working
   f. Because you need to allow HTTP request in server
        i. right click on server, ->networking->change security group. select a security group
        ii. GOto nework and security group->security group
        iii. select the security group you want to change
        iv. Inbound->Edit->Add Rule->
        v. type: http, port range: 80, Source: anywhere
        vi. type: Custom TCP Port Range: 8000, 
        vi. Save

3. Connect the server: Gunicorn
    a. Go inside project->wsgi.py
    b. gunicorn --bind 0.0.0.0:8000 django_banckend.wsgi:application
    


3. Django Project
  a. Before deployment steps
      i. activate:- source deploy_ml/bin/activate
      i. python manage.py check --deploy :- check the status and follow the recommendations
      ii. project/settings.py 
          DEBUG = False 
          ALLOWED_HOSTS = ['IPv4 Public IP']

django_backend folder contains backend files for this IDR project.

django_backend/ml_models contains machine learning algorithms.

Http Post request to run kmeans algorithm:

url: http://3.16.161.192:8000/ml_models/kmeans/
param: {"k":"2", "train":[["1","1","0", null],["1","2","0", null],["2","1","0", null],["2","2","0", null],["10","10","0", null],["10","11","0", null],["11","10","0", null],["11","11","0", null]], "header":"0"}

Http Post request to run db_scan algorithm:

url: http://3.16.161.192:8000/ml_models/db_scan/
param: {"eps":"1", "min_samples":"3", "train":[["x","y","z", null],["1","1","0", null],["1","2","0", null],["2","1","0", null],["2","2","0", null],["10","10","0", null],["10","11","0", null],["11","10","0", null],["11","11","0", null]], "header":"1"}

Http Post request to run agglomerative algorithm:

url: http://3.16.161.192:8000/ml_models/agglomerative/
{"n":2, "train":[["x","y", null],["1","1", null],["1","2", null],["2","1", null],["2","2", null],["10","10", null],["10","11", null],["11","10", null],["11","11", null]], "header":"1"}


Http Post request to run knn classifier algorithm:

url: http://3.16.161.192:8000/ml_models/knn_classifier/
param: {"label_col":"2", "n_neighbors":"2", "train":[["1","1","0", null],["1","2","0", null],["2","1","0", null],["2","2","0", null],["10","10","1", null],["10","11","1", null],["11","10","1", null],["11","11","1", null]], "test":[["3","3"],["13","13"]], "header":"0"}

Http Post request to run gaussian naive bayes algorithm:

url: http://3.16.161.192:8000/ml_models/gauss_nb/
param: {"label_col":"2", "train":[["1","1","0", null],["1","2","0", null],["2","1","0", null],["2","2","0", null],["10","10","1", null],["10","11","1", null],["11","10","1", null],["11","11","1", null]], "test":[["3","3"],["13","13"]], "header":"0"}

url: http://3.16.161.192:8000/ml_models/svm_classifier/
param: {"label_col":"2", "train":[["x","y","z", null],["1","1","0", null],["1","2","0", null],["2","1","0", null],["2","2","0", null],["10","10","1", null],["10","11","1", null],["11","10","1", null],["11","11","1", null]], "test":[["3","3"],["13","13"]], "header":"1"}

url: http://3.16.161.192:8000/ml_models/knn_neighbors/
param: {"n_neighbors":"2", "train":[["1","1", null],["1","2", null],["2","1", null],["2","2", null],["10","10", null],["10","11", null],["11","10", null],["11","11", null]], "test":[["3","3"],["13","13"]], "header":"0"}
