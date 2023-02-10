from django.contrib import admin
from gallery.models import ImageMetaData , ImageBlock

# Register your models here.
class ImageBlockAdmin(admin.ModelAdmin):
    list_display = ('id' , 'block_name' , 'block_dname' , 'block_display_order')
    ordering = ('id',)
admin.site.register(ImageBlock , ImageBlockAdmin)

class ImageMetaDataAdmin(admin.ModelAdmin):
    list_display = ('id' , 'data_name' , 'data_dname' , 'data_ename' , 'image_block' , 'data_type1' , 'data_type2' , 'data_dir' , 'data_file' , 'data_delay' , 'data_freq' , 'data_lst')
    list_filter = ('data_type1' , 'data_type2')
    search_fields = ('data_name' , 'data_dname')
    ordering = ('id',)
admin.site.register(ImageMetaData , ImageMetaDataAdmin)