from django.contrib import admin
from gallery.models import *

# Register your models here.
class BlockTypeAdmin(admin.ModelAdmin):
    list_display = ('id' , 'type_name' , 'type_dname')
    ordering = ('id',)
admin.site.register(BlockType , BlockTypeAdmin)


class ImageInfoAdmin(admin.ModelAdmin):
    list_display = ('id' , 'data_name' , 'data_dname' , 'data_ename' , 'block_type' , 'data_type1' , 'data_type2' , 'data_dir' , 'data_file' , 'data_delay' , 'data_freq' , 'data_lst')
    list_filter = ('data_type1' , 'data_type2')
    search_fields = ('data_name' , 'data_dname')
    ordering = ('id',)
admin.site.register(ImageInfo , ImageInfoAdmin)


class ImageBlockAdmin(admin.ModelAdmin):
    list_display = ('id' , 'block_name' , 'block_dname' , 'image_info' , 'block_display_order')
    ordering = ('id',)
admin.site.register(ImageBlock , ImageBlockAdmin)