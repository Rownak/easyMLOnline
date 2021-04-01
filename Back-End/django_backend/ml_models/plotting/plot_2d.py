import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

from sklearn.decomposition import PCA
import numpy as np
import os


def pca_2d(X):
    pca = PCA(n_components=2)
    df = pca.fit_transform(X)
    # print("reduced: ", reduced)
    return df


def plot_2d(X, label, plt_url,title="Output", features=None):

    if X.shape[1] > 2:
        X = pca_2d(X)
    if (features != None and len(features) == 2):
        pass
    else:
        features = []
        features.append("feature 0")
        features.append("feature 1")


    # Getting unique labels
    u_labels = np.unique(label)
    # plotting the results:
    for i in u_labels:
        plt.scatter(X[label == i, 0], X[label == i, 1], label="class {}".format(i))
    plt.xlabel(features[0])
    plt.ylabel(features[1])
    plt.title(title)
    plt.legend()
    plt.savefig(plt_url)
    plt.close()
