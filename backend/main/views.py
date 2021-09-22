from django.shortcuts import render
from main.models import Note
from rest_framework.decorators import api_view
from rest_framework.response import Response
from main.serializers import NoteSerializer

@api_view(["GET"])
def getnotes(request):
	notes = Note.objects.all()
	serializer = NoteSerializer(notes,many = True)
	return Response(serializer.data)

@api_view(["GET"])
def getnote(request,slug):
	notes = Note.objects.get(slug = slug)
	serializer = NoteSerializer(notes,many = False)
	return Response(serializer.data)

@api_view(["POST"])
def createnote(request):
	data = request.data 
	notes = Note.objects.create(
		body = data['body']
	)
	serializers = NoteSerializer(notes,many = False)
	return Response(serializers.data)

@api_view(['PUT'])
def updatenote(request,slug):
	data = request.data
	note = Note.objects.get(slug = slug)
	serializer = NoteSerializer(instance=note,many = False,data = data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def deletenote(request,slug):
	note = Note.objects.get(slug = slug)
	note.delete()
	return Response("noob")