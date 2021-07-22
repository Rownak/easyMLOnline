from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
import os
from rest_framework import status
from .models import CustomUser
import csv
@api_view(["POST"])
def logging_activity(request):
    user_id=request.user.id
    try:
        # load request from json
        data = json.loads(request.body)
        #print("data", data)
        # data contains two fileds: k: number of cluster, train: matrix(size: m*n)
        activity = data['activity_id']
        time = data['time']
        description = data['description']
        log_entry = []
        log_entry.append(activity)
        log_entry.append(time)
        log_entry.append(description)

        # print("logging activity: ", activity)
        # print("logging activity time: ",time)
        # print("logging activity comment: ", comment)
        # print("logging activity user: ", data['email'])
        if (user_id == None):
            user_id = CustomUser.objects.get(email=data['email']).pk
        # print("logging activity user id: ", user_id)
        log_dir ='media/log_files/{}/'.format(user_id)
        if not os.path.exists(log_dir):
            os.makedirs(log_dir)
        log_url = '{}{}.csv'.format(log_dir,user_id)

        # header = ["activity", "time", "description"]
        # if( not os.path.isfile(log_url)):
        #     with open(log_url, 'a') as f:
        #         writer = csv.writer(f)
        #         writer.writerow(header)
        #         writer.writerow(log_entry)
        # else:
        with open(log_url, 'a') as f:
            writer = csv.writer(f)
            writer.writerow(log_entry)

    except Exception as e:
        print(e)
        response = {"Error occured."}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    response = {"logging data saved."}
    return Response(response, status=status.HTTP_200_OK)