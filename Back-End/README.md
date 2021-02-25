django_backend folder contains backend files for this IDR project.

django_backend/ml_models contains machine learning algorithms.

Http Post request to run kmeans algorithm:

url: localhost:8000/ml_models/kmeans
param: {"k":2, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]]}

Http Post request to run db_scan algorithm:

url: localhost:8000/ml_models/db_scan
param: {"eps":1,"min_samples":3, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]]}

Http Post request to run agglomerative algorithm:

url: localhost:8000/ml_models/agglomerative
param: {"n":2, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]]}


