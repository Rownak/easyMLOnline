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
