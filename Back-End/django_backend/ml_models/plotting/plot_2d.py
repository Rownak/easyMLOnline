import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
import numpy as np
import os


def pca_2d(X):
    pca = PCA(n_components=2)
    df = pca.fit_transform(X)
    # print("reduced: ", reduced)
    return df


def plot_2d(X, label, plt_url):
    if X.shape[1] <= 2:
        pass
    else:
        X = pca_2d(X)

    # Getting unique labels
    u_labels = np.unique(label)

    # plotting the results:
    for i in u_labels:
        plt.scatter(X[label == i, 0], X[label == i, 1], label="class {}".format(i))
    plt.legend()
    plt.savefig(plt_url)
    plt.close()
