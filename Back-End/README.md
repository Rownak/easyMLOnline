django_backend folder contains backend files for this IDR project.

django_backend/ml_models contains machine learning algorithms.

Http Post request to run kmeans algorithm:

url: http://3.16.161.192:8000/ml_models/kmeans/
param: {"k":2, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]]}

Http Post request to run db_scan algorithm:

url: http://3.16.161.192:8000/ml_models/db_scan/
param: {"eps":1,"min_samples":3, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]]}

Http Post request to run agglomerative algorithm:

url: http://3.16.161.192:8000/ml_models/agglomerative/
param: {"n":2, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]]}


Http Post request to run knn classifier algorithm:

url: http://3.16.161.192:8000/ml_models/knn_classifier/
param: {"label_col":2, "n_neighbors":2, "train":[[1,1,0],[1,2,0],[2,1,0],[2,2,0],[10,10,1],[10,11,1],[11,10,1],[11,11,1]],"test":[[3,3],[13,13]]}

Http Post request to run gaussian naive bayes algorithm:

url: http://3.16.161.192:8000/ml_models/gauss_nb/
param: {"label_col":2, "train":[[1,1,0],[1,2,0],[2,1,0],[2,2,0],[10,10,1],[10,11,1],[11,10,1],[11,11,1]],"test":[[3,3],[13,13]]}

url: http://3.16.161.192:8000/ml_models/svm_classifier/
param: {"label_col":2, "train":[[1,1,0],[1,2,0],[2,1,0],[2,2,0],[10,10,1],[10,11,1],[11,10,1],[11,11,1]],"test":[[3,3],[13,13]]}

url: http://3.16.161.192:8000/ml_models/knn_neighbors/
param: {"n_neighbors":2, "train":[[1,1],[1,2],[2,1],[2,2],[10,10],[10,11],[11,10],[11,11]],"test":[[3,3],[0.5,0.5], [8,8],[13,13]]}
