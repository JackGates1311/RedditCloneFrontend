import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../shared/image/imageService";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  @Input() post;

  ngOnInit(): void {
  }

  deleteImage(image: string, modalId: string) {
    this.imageService.deleteImage("/api/file/delete/" + image).subscribe(() => {
      const index = this.post.images.findIndex(img => img === image);

      if (index !== -1) {
        this.post.images.splice(index, 1);
      }

      this.closeModal(modalId);

    }, error => {
      if(error.status === 403) {
        alert("You must be logged in first to do this task!");
      } else {
        alert("Error occurred while deleting image, please try it again later");
      }
    });
  }

  closeModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.classList.remove('show'); // Remove 'show' class to hide the modal
      modalElement.setAttribute('aria-hidden', 'true'); // Update 'aria-hidden' attribute
      document.body.classList.remove('modal-open'); // Remove 'modal-open' class from the body
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop) {
        modalBackdrop.parentNode.removeChild(modalBackdrop); // Remove the modal backdrop element
      }
    }
  }
}
