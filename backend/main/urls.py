from django.urls import path
from main import views

urlpatterns = [
	path('notes/',views.getnotes,name = "get_notes"),
	path('notes/create',views.createnote,name = "create_note"),
	path('notes/<slug:slug>/',views.getnote,name = "get_note"),
	path('notes/<slug:slug>/update/',views.updatenote,name = "update_note"),
	path('notes/<slug:slug>/delete/',views.deletenote,name = "delete_note")
]