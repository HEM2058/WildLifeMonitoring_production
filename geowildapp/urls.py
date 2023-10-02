from django.urls import path
from geowildapp import views
urlpatterns = [
      path('',views.Index,name='index'),

]